import logger from '../console/logger'

const help = function (): void {

    logger.log()
    logger.log("help:\n", "cyan")
    logger.log("available commands:\n", "cyan")
    logger.log("•  build args[ --name optional => default:cwd name, --path optional => default:cwd ]")
    logger.log("   example-1: zid-theme build --name omar --path .", "yellow")
    logger.log("   example-2: zid-theme build\n\n", "yellow")
    logger.log("•  help")
    logger.log("   example: zid-theme help\n", "yellow")
    logger.log("•  [version, --version, --v]")
    logger.log("   example: zid-theme --v\n", "yellow")

}


export default help