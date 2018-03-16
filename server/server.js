const express = require('express');
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 80;

const app = next({ dev });
const handle = app.getRequestHandler();
const getRoutes = require('./routes');

const routes = getRoutes();

app.prepare().then(() => {
  const server = express();

  // server.get('/note/:slug', (req, res) => {
  //   const params = { slug: req.params.slug };
  //   console.log('In Server');
  //   console.warn(params);
  //   console.log('In Server');
  //   return app.render(req, res, '/note/index.js', params);
  // });
  server.get('/note/:slug', (req, res) => {
    const params = { slug: req.params.slug };
    console.log('cool route');
    console.log(params);
    return app.render(req, res, '/note/single', params);
  });

  server.get('*', (req, res) => {
    const { query, pathname } = parse(req.url, true);

    const route = routes[pathname];
    console.log('IN SERVER ROOT ROUTE');
    console.log('pathname');
    console.log(pathname);
    console.log('query');
    console.log(query);

    if (route) {
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
