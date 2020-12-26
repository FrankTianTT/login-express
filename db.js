var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/';

//查询指定条件的数据
function searchUser(whereStr, callBack) {
    mongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db('login_project');
        dbo.collection('site').find(whereStr).toArray(function (err, result) {
            if (err) throw err;
            console.log('查询指定条件的数据...', result);
            callBack(result);
            db.close();
        })
    })
}

//插入一条数据到数据库
function insertUser(myobj, callBack) {
    mongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db('login_project');
        dbo.collection('site').insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log('文档插入成功');
            callBack(res);
            db.close();
        })
    })
}

exports.searchUser = searchUser;
exports.insertUser = insertUser;