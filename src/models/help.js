const logger = require('../console/logger.js');


const help = () => {

    logger.log()
    logger.log("help:\n", "cyan")
    logger.log("available commands:\n", "cyan")
    logger.log("•  build args[ --name optional => default:cwd name, --path optional => default:cwd ]")
    logger.log("   example-1: zid-theme build --name omar --path .", "yellow")
    logger.log("   example-2: zid-theme build\n\n", "yellow")
    logger.log("•  help")
    logger.log("   example: zid-theme help\n", "yellow")

}


module.exports = help