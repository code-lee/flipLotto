const express = require("express");
const app = express();

app.use("/css", express.static(__dirname + "/css"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log("server start:3000");
});
