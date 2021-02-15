const logger = require('../console/logger.js');


const delete_ds_store = (file_path) => {
    fs.unlink(file_path, (err) => reject('Unable to delete .DS_Store'))
    logger.log(`.DS_Store deleted - path: ${file_path}`, "yellow")
}


module.exports = delete_ds_store