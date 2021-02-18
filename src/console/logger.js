const colors = require('./colors')


const log = (msg='', color='green') => {

    let _msg = colors[color]+`  ${msg}`
    console.log(_msg)

}

const error = (msg) => {
    log()
    log(`${msg}\n`, "red")
    process.exit(9)
}

const logger = {
    log: log,
    error: error
}


module.exports = logger