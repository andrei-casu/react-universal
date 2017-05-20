(() => {
  'use strict';
  require('babel-register')({
      presets: ['react']
  });

  const express = require('express');
  const app = express();
  const React = require('react');
  const ReactDOMServer = require('react-dom/server');
  const Component = require('./components/component.jsx');

  app.use(express.static('public'));

  app.get('/', (req, res) => {
      var html = ReactDOMServer.renderToString(
          React.createElement(Component)
      );
      res.send(html);
  });

  var PORT = 3000;
  app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
  });
})();
