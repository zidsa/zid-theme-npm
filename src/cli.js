const commands = require('./models/commands.js');
const logger = require('./console/logger.js');
const validate_build_args = require('./helper/validate_build_args.js');


const cli = (args) => {

    let user_args = args.slice(2)

    if (user_args.length < 1) {
        logger.log()
        logger.log("no argument passed\n", "red")
        logger.log("available commands:\n\n•  build\n•  help\n", "green")
    }

    if (user_args[0] == 'build') {
        build_args = validate_build_args(user_args)
        commands.build(build_args.build_name, build_args.build_path)
    }
    else if (user_args[0] == 'help') {
        commands.help()
    }

}


module.exports = cli