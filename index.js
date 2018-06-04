// const http = require('http');

// const hostname = '127.0.0.1';

// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello Nodejs\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const serve = require('koa-static');
const router = require('./routes');

const app = new Koa();

app.use(views(path.join(__dirname, 'views'), {
  map: { html: 'nunjucks' },
})).use(serve(path.join(__dirname, 'public')));

router(app);

app.listen(4000, () => {
  // console.log('server is running at http://localhost:4000');
});
