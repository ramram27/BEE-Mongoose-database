const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://your user name:Your Password @cluster0.wtbwila.mongodb.net/?appName=Cluster0')
        console.log("database is connect")
    } catch (err) {
        console.log("database is not connect", err)
    }
}

module.exports = connectDB