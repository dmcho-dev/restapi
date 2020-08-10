const Koa = require("koa");
const bodyParser = require("koa-parser");
const _ = require("lodash");

const PORT = 4000;

const app = new Koa();
app.use(bodyParser());

// import the koa-router
const Router = require("koa-router");
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "welcome to koa application";
});

// GET /posts

const posts = [
  {
    id: "1",
    name: "nodejs developer",
    content: "asdasdasdasd asdasdas das asd",
  },
  {
    id: "2",
    name: "koajs developer",
    content: "asdasdas das asd",
  },
  {
    id: "3",
    name: "vuejs developer",
    content: "wqe asdasdas das asd",
  },
];

// GET /posts
router.get("/posts", (ctx) => {
  ctx.body = posts;
});

// POST /posts
router.post("/posts", (ctx) => {
  let { id, name, content } = ctx.request.body;
  console.log(ctx.request.body);

  if (!id) {
    ctx.throw(400, "id is required field");
  }
  if (!name) {
    ctx.throw(400, "name is required field");
  }
  if (!content) {
    ctx.throw(400, "content is required field");
  }

  posts.push({ id, name, content });

  console.log(posts);

  ctx.body = posts;
});

// GET /posts/:id
router.get("/posts/:id", (ctx) => {
  ctx.body = posts.find((post) => post.id === ctx.params.id);
});

// DELETE /posts/:id
router.delete("posts/:id", (ctx) => {
  ctx.body = _.remove(posts, (p) => p.id === ctx.params.id);
});

// PUT /posts/:id
router.put('/posts/:id', ctx => {
    let { id, name, content } = ctx.request.body;
    const index = posts.findIndex(p => p.id === ctx.params.id);
    // if(id) {
    //     posts[index].id = id;
    // }
    if(name) {
        posts[index].name = name;
    }
    if(content) {
        posts[index].content = content;
    }
    ctx.body = posts;
})

app.use(router.routes());

app.listen(PORT);
console.log(`Server is listening on Port at ${PORT}`);
