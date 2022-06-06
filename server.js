import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
// import App from './src/App';
const app = express();
app.use(express.static('./build', { index: false }));
app.get('/*', (req, res) => {
  const reactApp = renderToString(<></>);
  console.log(reactApp);
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    );
  });
});
app.listen(8080, () => {
  console.log('listening on port 8080');
});
