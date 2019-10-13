const express = require('express');
const next = require('next');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const initData = require("./initData");

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    res.redirect("/card");
  });

  server.get('/init', (req, res) => {
    res.json(initData);
  });


  server.get('/:id', (req, res) => {
    app.render(req, res, `/${req.params.id}`);
  });
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
