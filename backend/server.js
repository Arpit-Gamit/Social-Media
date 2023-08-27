const app =require('./app');
const { connecteDatabase } = require('./config/database');


connecteDatabase();
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})