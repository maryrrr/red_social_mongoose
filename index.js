const express= require('express')
const app=express()
require("dotenv").config();

const PORT = process.env.PORT || 3001;


// const PORT=3000
const { typeError }= require('./middlewares/errors');
const { dbConnection } = require("./config/config")

app.use(express.json())
dbConnection()
app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));

app.use(typeError)

app.listen(PORT,() => console.log(`Server start at the ${PORT}`))