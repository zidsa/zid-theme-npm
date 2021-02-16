const path = require('path');
const logger = require('../console/logger.js');
const zip_theme = require('../helper/zip_theme.js');


const build = (build_name, build_path) => {

    build_name == null ? build_name = path.basename(build_path) : null

    logger.log()

    zip_theme(build_name, build_path)
        .then(message => logger.log(message))
        .catch(e => logger.error(e))

}


module.exports = build