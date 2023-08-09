const express = require("express");
const route = express.Router();

const toolsModel = require("../models/tools");

route.get("/", async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    try {
        const data = await toolsModel.findAll();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(404).send();
    }
})

route.get("/num", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.send({ id: 1, num: "num"});
})

route.post("/", async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    try {
        const newToolsData = await toolsModel.insert(req.body);
        console.log("收到请求体:\n", req.body);
        res.status(201).json(newToolsData);
    } catch (error) {
        console.error(error);
        res.status(500),send()
    }
})

route.put("/:id", async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    try {
        const updatedData = await toolsModel.update(req.params.id, req.body);
        console.log("收到请求体:\n", req.params.id, req.body);
        res.json(updatedData);
    } catch (error) {
        console.error(error);
        res.status(500).send(req.params.id);
    }
})

route.delete("/:id", async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    try {
        console.log('delete /:id');
        console.log("收到请求参数:", req.params.id);
        await toolsModel.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})

module.exports = route;