const http = require("http");
const server = http.createServer(function(req, res) {
  // Meta data
  console.log(req.url);
  res.writeHead(200,{"Content-type":"text/plain"});
  res.write("Writing from node server");
  res.end();
});

var port = process.env.PORT||5000;
server.listen(port);
console.log("Server is listening at port " + port);

