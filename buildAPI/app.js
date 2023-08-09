const express = require("express");
const app = express();
const routes = require("./routes");
const port = 3000;

app.use(express.json());

routes(app);

app.get("/", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.send("Hello world");
})

app.post("/", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    console.log("收到请求体:", req.body);
    res.status(201).send();
})

app.put("/:id", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    console.log("收到请求参数:", req.params.id);
    console.log("收到请求体:", req.body);
    res.send();
})

app.delete("/:id", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    console.log("收到请求参数:", req.params.id);
    res.status(204).send();
})

app.listen(port, () => {
 console.log('Express server监听 http://localhost:'+port);
})