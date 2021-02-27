import * as fs from 'fs'
import logger from '../console/logger'


const delete_ds_store = (file_path:string) => {
    fs.unlinkSync(file_path)
    logger.log(`.DS_Store deleted - path: ${file_path}\n\n`, "yellow")
}


export default delete_ds_store