import * as path from 'path'
import * as AdmZip from 'adm-zip'


const new_theme = async (theme_name:string): Promise<any> => {

    const theme_path = path.resolve('.', theme_name)
    let zip = new AdmZip(path.resolve(__dirname, 'starter.zip'));
    zip.extractAllTo(theme_path)
    
}


export default new_theme