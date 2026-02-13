const userCreate = require('../services/userServices')

const userController = async (req, res) => {
    try {
        const { name, mobileNum, emailId } = req.body;
        if (!name || !mobileNum || !emailId) {
            return "All field are required"
        }
        const userData = await userCreate(name, mobileNum, emailId);
        res.status(201).json({ data: userData, msg: 'data create' })
    } catch (err) {
        res.status(500).json({ error: err, msg: 'Internal' })
    }
}
module.exports = { userController }