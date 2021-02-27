import logger from '../console/logger';
import * as commands from '../models/commands';


const print_available_commands = () => {

    for (let command in commands) {
        logger.log(`• ${command}`)
    }

    logger.log()
}


export default print_available_commands