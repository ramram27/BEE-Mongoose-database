const { register } = require('../services/authService')

const registerController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return "email and password are required"
        }
        const userData = await register(email, password)
        res.status(201).json({
            data: userData,
            msg: "user created"
        })
    } catch (err) {
        res.status(500).json({
            error: err,
            msg: "internal server"
        })
    }
}
module.exports = { registerController }