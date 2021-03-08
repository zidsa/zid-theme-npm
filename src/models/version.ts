import logger from '../console/logger'
import * as pjson from '../../package.json'


const version = (): void => {
    logger.log(`v${pjson.version}`, 'green')
}


export default version
