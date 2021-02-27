import logger from '../console/logger'
import zip_theme from '../helper/zip_theme'


const build = function (build_name:string, build_path:string): void {

    logger.log()

    try {
        zip_theme(build_name, build_path)
    } catch (error) {
        logger.error(error)
    }

}


export default build