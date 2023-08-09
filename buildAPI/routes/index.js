const tools = require("./tools");
module.exports = app => {
    app.use("/tools", tools);
}