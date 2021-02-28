import logger from '../console/logger'
import { commands } from './commands'


const help = function (): void {

    logger.log()
    logger.log("help:\n", "cyan")
    logger.log("available commands:\n", "cyan")

    for (let command of commands) {
        logger.log(`•  ${command.command}`)
        command.examples.forEach(example => logger.log(`   ${example}`, 'yellow'));
        logger.log()
    }

}


export default help