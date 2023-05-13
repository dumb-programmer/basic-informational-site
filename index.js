const http = require("http");
const PORT = 8080;
const HOST = "localhost";

const server = http.createServer((req, res) => {
    const route = req.url;
    if (route === "/") {
        res.end("index.html");
    }
    else if (route === "/about") {
        res.end("about.html");
    }
    else if (route === "/contact-me") {
        res.end("contact-me.html");
    }
    else {
        res.end("404.html");
    }
});

server.listen(PORT, HOST, () => console.log(`Server listening on port : ${PORT}`))