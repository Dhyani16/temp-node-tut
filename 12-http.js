const http = require("http");
const server = http.createServer((req, res) => {
  //console.log(req)
  if (req.url === "/") {
    res.write("welcome to our home page");
    res.end();
  }
  if (req.url === "/about") {
    res.write("This is the about page");
    res.end();
  }
  res.write(`<h1>Oops</h1>
  <h1>This page doesnt exist</h1>
  <a href="/">Back to homepage</a>`)
  res.end();
});
server.listen(5000);
