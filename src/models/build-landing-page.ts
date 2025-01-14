import logger from '../console/logger'
import zip_landing_page from '../helper/zip_landing_page'


const build_landing_page = (build_name:string, build_path:string): void => {

    logger.log()

    try {
        zip_landing_page(build_name, build_path)
    } catch (error) {
        logger.error(error)
    }

}


export default build_landing_page