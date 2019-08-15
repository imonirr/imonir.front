const express = require('express');
const compression = require('compression');
// const routes = require('./routes')
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
const PORT = process.env.VIRTUAL_PORT;

const app = next({ dev });
const handle = app.getRequestHandler(app);
const getRoutes = require('./routes');

// const handler = routes.getRequestHandler(app)
const routes = getRoutes();

app.prepare().then(() => {
  const server = express();
  server.use(compression());

  // server.get('/note/:slug', (req, res) => {
  //   const params = { slug: req.params.slug };
  //   console.log('In Server');
  //   console.warn(params);
  //   console.log('In Server');
  //   return app.render(req, res, '/note/index.js', params);
  // });
  server.get('/note/:slug', (req, res) => {
    const params = { slug: req.params.slug };
    // console.log(params);
    return app.render(req, res, '/note/single', params);
  });

  server.get('/writer/:id', (req, res) => {
    const params = { id: req.params.id };
    return app.render(req, res, '/writer', params);
  });

  server.get('*', (req, res) => {
    const { query, pathname } = parse(req.url, true);

    const route = routes[pathname];

    if (route) {
      console.log('IN SERVER ROOT ROUTE');
      // console.log(`pathname: ${pathname}`);
      // console.log(`query: ${query}`);
      console.log(`Page: ${route.page}`);
      return app.render(req, res, route.page, route.query);
    }
    return handle(req, res);
  });

  // server.get('/', (req, res) => {
  //   return app.render(req, res, '/index');
  // });


  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
