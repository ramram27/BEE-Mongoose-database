const AuthUser = require('../models/AuthUser')
const bcrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (email, password) => {
    const emailExist = await AuthUser.findOne({ email })
    if (emailExist) {
        throw Error("Email id already register")
    }
    const salt = await bcrpt.genSalt(8)
    const hashPassword = await bcrpt.hash(password, salt)
    const userData = await AuthUser.create({

        email,
        password: hashPassword
    })
    const token = jwt.sign(
        { id: userData._id },
        process.env.SECRET_KEY,
        { expiresIn: '1d' }
    )

    return {
        data: {
            userid: userData._id,
            emailid: userData.email
        },
        token: token
    }
}

module.exports = { register }