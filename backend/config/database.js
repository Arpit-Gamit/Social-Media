const mongoose = require('mongoose');

exports.connecteDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((con)=>console.log(`Databse Connected: ${con.connection.host}`))
    .catch((err)=>console.log(err));
};