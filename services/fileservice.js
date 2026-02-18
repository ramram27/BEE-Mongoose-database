const fs = require('fs');
const { fileDir } = require('../config/file.config')
const path = require('path')


const writeFile = async (filename, content) => {
    const filepath = path.join(fileDir, filename)
    await fs.writeFile(filepath, content)
    return "file write"
}

module.exports = { writeFile }