interface Colors {
    red: string,
    green: string,
    yellow: string,
    blue: string,
    purple: string,
    cyan: string,
    [key: string]: string,
}

const colors: Colors = {
    red: "\u001b[1;31m ",
    green: "\u001b[1;32m ",
    yellow: "\u001b[1;33m ",
    blue: "\u001b[1;34m ",
    purple: "\u001b[1;35m ",
    cyan: "\u001b[1;36m ",
}


export default colors