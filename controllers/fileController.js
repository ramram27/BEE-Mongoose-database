const { writeFile } = require('../services/fileservice');

const writeController = async (req, res) => {
    try {
        const { filename, content } = req.body
        const msg = await writeFile(filename, content);
        res.status(200).json({ msg: msg })
    } catch (err) {
        res.status(500).json({ error: err, msg: 'error' })
    }
}
module.exports = { writeController }
