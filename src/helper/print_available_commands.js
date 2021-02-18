const logger = require('../console/logger.js');
const commands = require('../models/commands.js');


const print_available_commands = () => {

    for (command in commands) {
        logger.log(`• ${command}`)
    }

    logger.log()
}


module.exports = print_available_commands