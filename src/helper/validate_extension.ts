import * as path from 'path'


const validate_extension = function (file:string, base_structure_extnames:string[]): string | boolean {

    let file_ext = path.extname(file)
    if (!base_structure_extnames.includes(file_ext)) return file_ext
    return true

}


export default validate_extension