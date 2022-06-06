import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
const app = express();
app.get('/*', (req, res) => {
  const reactApp = renderToString(<h1>Hello from server side!</h1>);
  res.send(`
        <html>
            <head>
                <title>SSR Example</title>
            </head>
            <body>
                <div id="root">${reactApp}</div>
            </body>
        </html>
    `);
});
app.listen(8080, () => {
  console.log('listening on port 8080');
});
