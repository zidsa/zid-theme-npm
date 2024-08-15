import build from './build'
import help from './help'
import version from './version'
import new_ from './new'
import login from './login'


interface CLICommands {
    name: string; 
    command: string; 
    examples: string[];
}


const CLI_Commands:Set<String>= new Set(['version', 'v', '--version', '--v', 'build', 'new', 'help', 'login']);


const commands: Array<CLICommands> = [
    {
        name: "build",
        command: "build args[ --name optional => default:cwd name, --path optional => default:cwd ]",
        examples: ["example-1: zid-theme build --name omar --path ./folder", "example-2: zid-theme build"]
    },
    {
        name: "new",
        command: "new args[ theme name: name_your_theme]",
        examples: ["example: zid-theme new best_theme"]
    },
    {
        name: "help",
        command: "help",
        examples: ["example: zid-theme help"]
    },
    {
        name: "version",
        command: "[version, v, --version, --v]",
        examples: ["example: zid-theme --v"]
    },
    {
        name: "login",
        command: "login",
        examples: ["example: zid-theme login"]
    },
]


export {
    commands,
    build,
    new_,
    help,
    version,
    login,
    CLI_Commands
}