import logger from '../console/logger';
import { commands } from '../models/commands';


const print_available_commands = () => {
    
    for (let command of commands) {
        logger.log(`• ${command.name}`)
    }

    logger.log()
}


export default print_available_commands