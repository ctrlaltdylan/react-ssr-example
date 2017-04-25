var http = require('http'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server')
;


http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    var html = ` 
      <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>This jawn has been rendered on the Server Side</title>
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    `;
    // Return the page to the browser
    res.end(html);
  
}).listen(8000, function(err) {
  if (err) throw err
  console.log('SSR server listening on port 8000 👂');
});