const { create } = require("./Job.controller");

module.exports = {

    /**
     * @api {post} /applications
     * @apiGroup Applications
     * @apiName CreateApplications
     * @apiSuccess {Object} Application  Anewly created Application object
     * @apiExample {curl} Example usage: 
     * curl -i http://localhost:4000/application
     * @apiDescription LoggedIn user can apply for the Job
     * @apiHeader {String} Authorization JWT Authorization header
     * @apiHeaderExample {json} Request Authorization Header
     * {
     *  "authorization": "asdsdghgwg4rht32sd"
     * }
     * @apiParam {String} [firstName]
     * @apiParam {String} [lastName]
     * @apiParam {String} [email]
     * @apiParam {String} [JobId]
     */

    async create(ctx) {
        try {
            const candidate = await ctx.db.Candidate.create({
                firstName: ctx.request.body.firstName,
                lastName: ctx.request.body.lastName,
                email: ctx.request.body.email,
            });

            console.log(candidate)

            ctx.body = await ctx.db.Application.create({
                JobId: ctx.request.body.jobId,
                CandidateId: candidate.id
            });

        } catch(err) {
            ctx.throw(500, err);
        }
    }
}