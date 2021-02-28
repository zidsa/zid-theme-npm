import build from './build'
import help from './help'
import version from './version'


interface CLICommands {
    name: string; 
    command: string; 
    examples: string[];
}

const commands: Array<CLICommands> = [
    {
        name: "build",
        command: "build args[ --name optional => default:cwd name, --path optional => default:cwd ]",
        examples: ["example-1: zid-theme build --name omar --path ./folder", "example-2: zid-theme build"]
    },
    {
        name: "help",
        command: "help",
        examples: ["example: zid-theme help"]
    },
    {
        name: "version",
        command: "[version, --version, --v]",
        examples: ["example: zid-theme --v"]
    },
]


export {
    commands,
    build,
    help,
    version
}