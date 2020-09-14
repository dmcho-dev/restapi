const UtilService = require('../services/util.service');
const JwtService = require('../services/jwt.service');

module.exports = {

    /**
     * 
     * @api {post} /signup
     * @apiGroup Users
     *  @apiName signupUser
     * @apiParam {String} [email] user must need to privided the email
     * @apiParamExample {String} Email Field : 
     * {
     *  "email": "test@email.com",
     *  "password": "password12"
     * }
     * @apiParam {String} [password] user must to privide the password
     * @apiSuccess {String} Msg Signup successfull!
     * @apiSuccessExample {json} Signup-Success-Response : 
     * HTTP/1.1 200Ok
     * {
     *  "msg": "signup Successful"
     * }
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:4000/signup
     * @apiDescription User can create new account
     * 
     */
    async signup(ctx) {
        try {
            console.log(ctx.request.body);
            let { email, password } = ctx.request.body;

            if(!email) {
                ctx.throw(400, 'please privide the email');
            }
            if(!password) {
                ctx.throw(400, 'please privide the password');
            }

            const encryptedPassword = await UtilService.hashPassword(password);
            await ctx.db.User.create({
                email,
                password: encryptedPassword
            })
            ctx.body = 'Signup successful!';
        }
        catch( err) {
            ctx.throw(500, err);
        }

    },

    /**
     * @api {post} /login
     * @apiGroup Users
     * @apiName loginUser
     * @apiParam {String} [email] user must need to provide
     * @apiParam {String} [password] user must need to password
     * @apiParamExample {json} Request Params :
     * {
     *  "email": "test@email.com",
     *  "password": "password12"
     * } 
     * @apiSuccess {Object} Token  A Json web token to access proceted route
     * @apiSuccessExample {json} Login Response:
     * {
     *  "token": "ASDASDGWRTFHGSDF"
     * }
     * @apiExample {curl} Example usage: 
     * curl -i http://localhost:4000/login
     * @apiDescription User can login to the system
     */

    async login(ctx) {
        try {
            let { email, password } = ctx.request.body;
            console.log({email, password})

            if(!email) {
                ctx.throw(400, 'please privide the email');
            }
            if(!password) {
                ctx.throw(400, 'please privide the password');
            }

            const user = await ctx.db.User.findOne({
                where: {
                    email
                }
            });
            if(!user) {
                ctx.throw(500, 'unable to process request');
            }

            const matched = await UtilService.comparedPassword(password, user.password);
            if(matched) {

                const token = JwtService.issue({
                    payload: {
                        user: user.id,
                    }
                }, '1 day');

                console.log({token})

                ctx.body = { token };

            }else {
                ctx.throw(500, 'invalid password');
            }
            

        }
        catch(err) {
            ctx.throw(500, err);
        }
    }
}