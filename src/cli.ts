import * as commands from './models/commands';
import logger from './console/logger'
import validation from './helper/validation'
import print_available_commands from './helper/print_available_commands'
import {homedir} from "os";
import path from "path";
import fs from "fs";

const homeDir = homedir();
const configDir = path.join(homeDir, '.zid-theme');
export const configPath = path.join(configDir, 'config.json');

if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
}

const cli = (args:string[]): void => {

    let user_args = args.slice(2)

    if (user_args.length < 1) {
        logger.log()
        logger.log("no argument passed\n", "red")
        logger.log("available commands:\n")
        print_available_commands()
        process.exit(9)
    }

    let versions = ['--version', '-v', '--v', 'version']

    if (versions.includes(user_args[0])) {
        commands.version()
        process.exit(0)
    }

    if (!commands.CLI_Commands.has(user_args[0])) {
        logger.log()
        logger.log(`Invalid argument ${user_args[0]}\n`, "red")
        logger.log("available commands:\n",)
        print_available_commands()
        process.exit(9)  
    }

    if (user_args[0] == 'build') {
        const build_args = validation.validate_build_args(user_args)
        commands.build(build_args.build_name, build_args.build_path)
    }
    else if (user_args[0] == 'new') {
        const new_args = validation.validate_new_args(user_args)
        commands.new_(new_args.theme_name)
    }
    else if (user_args[0] == 'help') {
        commands.help()
    }
    else if (user_args[0] == 'login') {
        commands.login()
    }
    else if (user_args[0] == 'list') {
        commands.list()
    }
    else if (user_args[0] == 'preview') {
        const args = validation.validate_preview_args(user_args)
        commands.preview(args.store_email)
    }
}


export default cli