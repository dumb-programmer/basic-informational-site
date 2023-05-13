const http = require("http");
const fs = require("fs");

const PORT = 8080;
const HOST = "localhost";

const sendFile = (filename, onSuccess, onError) => {
    fs.readFile(filename, { encoding: "utf8" }, (err, data) => {
        if (err) {
            onError(err);
            return;
        }
        onSuccess(data);
    })
};

const handleError = (res) => {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("Something went wrong");
};

const server = http.createServer((req, res) => {
    const route = req.url;
    if (route === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        sendFile("./static/index.html", (data) => {
            res.end(data);
        }, () => handleError(res));
    }
    else if (route === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        sendFile("./static/about.html", (data) => {
            res.end(data);
        }, () => handleError(res));
    }
    else if (route === "/contact-me") {
        res.writeHead(200, { "Content-Type": "text/html" });
        sendFile("./static/contact-me.html", (data) => {
            res.end(data);
        }, () => handleError(res));
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        sendFile("./static/404.html", (data) => {
            res.end(data);
        }, () => handleError(res));
    }
});

server.listen(PORT, HOST, () => console.log(`Server listening on port : ${PORT}`))