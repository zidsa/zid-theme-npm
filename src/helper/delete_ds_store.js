const fs = require('fs');
const logger = require('../console/logger.js');


const delete_ds_store = (file_path) => {
    fs.unlinkSync(file_path)
    logger.log(`.DS_Store deleted - path: ${file_path}\n\n`, "yellow")
}


module.exports = delete_ds_store