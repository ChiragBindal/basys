const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({path : './config.env'});

const DB = process.env.DATABASE_URL.replace('<password>' , process.env.DATABASE_PASSWORD);

async function main()
{
    await mongoose.connect(DB);
}

let a = main();
a.then(()=>{
    console.log("DB connected successfuly !!");
})

const port = process.env.PORT || 5000;
app.listen(port , ()=>{
    console.log(`App running on the port ${port}`);
})