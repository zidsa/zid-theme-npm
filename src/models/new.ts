import logger from '../console/logger'
import new_theme from '../helper/new_theme'


const new_ = (theme_name:string): void => {

    logger.log()

    try {
        new_theme(theme_name).then(() => {
            logger.log(`${theme_name} project successfully created 🎉!\n`);
            logger.log('Happy Coding </>!\n')
        })
    } catch (error) {
        logger.error(error)
    }

}


export default new_