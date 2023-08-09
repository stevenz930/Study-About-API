const mongoose = require("mongoose");
const url = "mongodb://localhost:20000/testAPI";

module.exports = function(){
    mongoose.connect(url)
    const conn = mongoose.connection;
    conn.on('error', () => {
        console.error('连接数据库出错')
    })
    conn.once('open', () => {
        console.error('已连接数据库')
    })
    conn.on('close', () => {
        console.error('已断开数据库')
    })
}