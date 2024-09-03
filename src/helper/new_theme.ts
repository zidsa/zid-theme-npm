import * as fs from 'fs'
import * as readline from 'readline'
import * as path from 'path'
import AdmZip from 'adm-zip'
import logger from '../console/logger'


const create_new_theme = (theme_name: string, theme_path:string): void => {

    let zip = new AdmZip(path.resolve(__dirname, 'starter.zip'));
    zip.extractAllTo(theme_path, true)

    logger.log()
    logger.log(`${theme_name} project successfully created 🎉!\n`);
    logger.log('Happy Coding </>!\n')

}


const new_theme = (theme_name:string): void => {

    const theme_path = path.resolve('.', theme_name)

    if (fs.existsSync(theme_path)) {

        logger.log(`project ${theme_name} already exist`, 'yellow')

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(`   Do you want to overwrite? Y/[n]: `, (confirm) => {
            let answer = confirm.toLowerCase();
            if (answer === 'yes' || answer === 'y') create_new_theme(theme_name, theme_path);
            rl.close();
        });

        rl.on("close", function() {
            logger.log()
            process.exit(0);
        });

        return;
    }

    create_new_theme(theme_name, theme_path)
}


export default new_theme