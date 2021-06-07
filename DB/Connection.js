const mongoose = require('mongoose');

const URI =
    "mongodb://dbUser:dbUser@cluster0-shard-00-00.vcxbh.mongodb.net:27017,cluster0-shard-00-01.vcxbh.mongodb.net:27017,cluster0-shard-00-02.vcxbh.mongodb.net:27017/test?ssl=true&replicaSet=atlas-tm98ie-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected..!');
};

module.exports = connectDB;