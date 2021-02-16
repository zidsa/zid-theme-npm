const path = require('path')
const logger = require('../console/logger.js');


const validate_build_args = (user_args) => {

    if (user_args[1]) {
        if (user_args[1] !== '--name' && user_args[1] !== '--path') {
            logger.error(`Invalid Argument ${user_args[1]}`)
        }
    }
    if (user_args[3]) {
        if (user_args[3] !== '--name' && user_args[3] !== '--path') {
            logger.error(`Invalid Argument ${user_args[3]}`)
        }
    }
    if (user_args[2] == '--name' || user_args[2] == '--path') {
        logger.error(`Invalid Argument ${user_args[2]} for ${user_args[1]}`)
    }
    if (user_args[4] == '--name' || user_args[4] == '--path') {
        logger.error(`Invalid Argument ${user_args[4]} for ${user_args[3]}`)
    }

    let build_path = process.cwd()
    let build_name = path.basename(process.cwd())

    for (let i = 1; i < user_args.length; i++) {
        if (user_args[i] == '--name' && user_args[i+1]) {
            build_name = user_args[i+1]
        }
        else if (user_args[i] == '--path' && user_args[i+1]) {
            build_path = path.resolve(process.cwd(), user_args[i+1] || '.')
        }
    }

    return { build_path: build_path, build_name: build_name }
}


module.exports = validate_build_args