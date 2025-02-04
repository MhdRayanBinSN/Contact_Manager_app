const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config()

connectDb()
const app = express()
const port = process.env.PORT

app.use(express.json()); //help to parse data from client
app.use('/api/contacts',require('./routes/contactRoutes')) //contact

app.use('/api/users',require('./routes/userRoutes'))   //reg and login


app.use(errorHandler)


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
    
})
