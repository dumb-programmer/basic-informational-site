const express = require("express");
const fs = require("fs");

const app = express();

const PORT = 8080;

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
    res.status(500).send("Something went wrong");
};

app.use(express.static("static/css"));

app.get("/", (req, res) => {
    sendFile("./static/html/index.html", (data) => res.send(data), () => handleError(res))
});

app.get("/about", (req, res) => {
    sendFile("./static/html/about.html", (data) => res.send(data), () => handleError(res))
});
app.get("/contact-me", (req, res) => {
    sendFile("./static/html/contact-me.html", (data) => res.send(data), () => handleError(res))
});

app.use((req, res) => {
    sendFile("./static/html/404.html", (data) => res.status(404).send(data), () => handleError(res))
});

app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`))