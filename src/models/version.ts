import logger from '../console/logger'
import * as pjson from '../../package.json'


const version = function (): void {
    logger.log(`v${pjson.version}`, 'green')
}


export default version
