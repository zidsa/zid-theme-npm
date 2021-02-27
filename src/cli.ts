import * as commands from './models/commands';
import * as pjson from '../package.json'
import logger from './console/logger'
import validate_build_args from './helper/validate_build_args'
import print_available_commands from './helper/print_available_commands'


const cli = function (args:string[]): void {

    let user_args = args.slice(2)

    if (user_args.length < 1) {
        logger.log()
        logger.log("no argument passed\n", "red")
        logger.log("available commands:\n")
        print_available_commands()
        process.exit(9)
    }

    let versions = ['--version', '--v', 'version']

    if (versions.includes(user_args[0])) {
        logger.log(`v${pjson.version}`, 'green')
        process.exit(0)
    }

    if (!commands[user_args[0] as keyof typeof commands]) {
        logger.log()
        logger.log(`Invalid argument ${user_args[0]}\n`, "red")
        logger.log("available commands:\n",)
        print_available_commands()
        process.exit(9)  
    }

    if (user_args[0] == 'build') {
        const build_args = validate_build_args(user_args)
        commands.build(build_args.build_name, build_args.build_path)
    }
    else if (user_args[0] == 'help') {
        commands.help()
    }

}


export default cli