koa-querybody
================

> koa-querybody is a koa middleware for merging content.request.query and content.request.body (if it exist)

## Install
>Install with [npm](https://github.com/npm/npm)

```
$ npm install koa-querybody
```


## Hello world
```sh
npm install koa
npm install koa-body
npm install koa-querybody
```
index.js:
```js
const Koa = require('koa');
const koaBody = require('koa-body');
const koaQuerybody = require('koa-querybody')

const app = new Koa();

app.use(koaBody());
app.use(koaQuerybody());

app.use(ctx => {
  console.log(ctx.params);
  console.log(ctx.request.params) // The same to call ctx.params
});

app.listen(3000);
```

```sh
$ node index.js
$ curl -i http://localhost:3000/users?age=20 -d "name=test"
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
Content-Length: 29
Date: Wed, 03 May 2017 02:09:44 GMT
Connection: keep-alive

{"age":"20", "name":"test"}
```


## License
The MIT License, 2018 [Fred Shaw](https://github.com/fredxiaoF) ([@FredShawF](https://twitter.com/FredShawF))
