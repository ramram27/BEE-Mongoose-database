const express = require('express');
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
require("dotenv").config();


const app = express()
const port = 5000

app.use(express.json())
connectDB();

// app.use('/api', userRoutes)
app.use('/auth', authRoutes)

app.listen(port, (req, res) => {
    console.log('Server is runing', port)
})