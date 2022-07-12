const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to our home page");
  }
  if (request.url === "/about") {
    response.end("<h1>Here is the short history about our company</h1>");
  } else {
    response.end(
      `<h1>oops! Seems like there is no page called ${request.url}</h1><a href="/">Take me to home</a>`
    );
  }
});

server.listen(5000);
