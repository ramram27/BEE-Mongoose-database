const express = require('express');
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db')

const app = express()
const port = 5000

app.use(express.json())
connectDB();
app.use('/api', userRoutes)

app.listen(port, (req, res) => {
    console.log('Server is runing', port)
})