const http = require('http');
var express=require('express');
const body=require('body-parser');
var app=express()
app.use(body.json())
const hostname = '127.0.0.1';
const port = 4000;
require('./router').establishRoutes(app)
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports=app;

// var express=require('express');
// const body=require('body-parser');
// var app=express()
// app.use(body.json())
// require('./router').establishRoutes(app);
// app.listen(3500);