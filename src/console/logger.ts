import colors from './colors'

const log = function (msg='', color='green'): void {

    let _msg = colors[color]+`  ${msg}`
    console.log(_msg)

}

const error = function (msg: string): void {
    log()
    log(`${msg}\n`, "red")
    process.exit(9)
}

const logger = {
    log: log,
    error: error
}


export default logger