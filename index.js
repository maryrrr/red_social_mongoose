const express= require('express')
const app=express()
require("dotenv").config();

const users = require('./routes/users')(app)
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
const cors=require('cors')

const PORT = process.env.PORT || 3001;


// const PORT=3000
const { typeError }= require('./middlewares/errors');
const { dbConnection } = require("./config/config")

app.use(express.json())
app.use(cors())
dbConnection()
app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));


app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

app.use(typeError)

app.listen(PORT,() => console.log(`Server start at the ${PORT}`))