const express = require('express')
const { userController,
    getAllUserInControllers,
    getByIdController, updateUserController } = require('../controllers/userController')

const { writeController } = require('../controllers/fileController')

const router = express.Router()

router.post('/user', userController)
router.get('/get-user', getAllUserInControllers)
router.get('/get-data:id', getByIdController)
router.put('/update-user:id', updateUserController)

router.post('/write-file', writeController)

module.exports = router;