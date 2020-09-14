const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-parser");
const _ = require('lodash');
const serve = require('koa-static');

const router = require('./routes');

const app = new Koa();
const PORT = 4000;

const db = require('./models');
    // db.sequelize.sync()
    db.sequelize.sync({force: true})
        .then(() => {
            console.log("model synced!");
        })
        .catch(er => console.log(er))

app.context.db = db;
app.use(bodyParser());
app.use(serve(__dirname + '/public'));
app.use(router.routes());

app.listen(PORT);
console.log(`Server is listening on Port at ${PORT}`);