const path = require('path');


const validate_extension = (file, base_structure_extnames) => {

    let file_ext = path.extname(file)
    if (!base_structure_extnames.includes(file_ext)) return file_ext
    return true

}


module.exports = validate_extension