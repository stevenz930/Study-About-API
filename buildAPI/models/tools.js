const { ObjectId } = require("mongodb");
const db = require('../config/mongooseConnection')
const mongoose = require("mongoose");

var toolSchema = new mongoose.Schema({
    name: String,
    age: Number
},{
    versionKey: false
})

var toolModel = mongoose.model('tools', toolSchema)

var date = new Date();

exports.insert = async (data) => {
    let result
    try {
        db(toolModel.create(data)
            .then((res) => {
                console.log(date, ":添加数据成功:\n", res);
                result = res
            }).catch((err) => {
                console.log(date, ":添加数据失败:\n", err);
            })
        )
    } catch (error) {
        throw date + ":添加数据到数据库出错";
    }
    return result
}

exports.findAll = async () => {
    let result
    db(await toolModel.find()
        .then((res) => {
            console.log(date, ":查询数据成功:\n", res);
            result = res
        }).catch((err) => {
            console.log(date, ":查询数据失败:\n", err);
        })
    )
    return result
};

//exports.findAll = async () => {
//    try {
//        db(toolModel.find()
//            .then((res) => {
//                console.log(date, ":查询数据成功:\n", res);
//            }).catch((err) => {
//                console.log(date, ":查询数据失败:\n", err);
//            })
//        )
//        return res
//    } catch (error) {
//        throw date + ":查询数据出错";
//    }
//};

exports.update = async (id, data) => {
    let result
    try {
        db(toolModel.updateOne(
                { _id: new ObjectId(id) },
                { $set: data },
            ).then((res) => {
                console.log(date, ":更新数据成功:\n", res);
                result = res
            }).catch((err) => {
                console.log(date, ":更新数据失败:\n", err);
            })
        )
    } catch (error) {
        throw date + ":更新数据出错";
    }
    return result
};

exports.delete = async (id) => {
    let result
    try {
        console.log('delete /:id:',id);
        db(toolModel.deleteOne(
                { _id: new ObjectId(id) },
            ).then((res) => {
                console.log(date, ":删除数据成功:\n", res);
                result = res
            }).catch((err) => {
                console.log(date, ":删除数据失败:\n", err);
            })
        )
    } catch (error) {
        throw date + ":删除数据出错";
    }
    return result
};