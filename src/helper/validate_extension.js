const path = require('path');


const validate_extension = (file, base_structure_extnames) => {

    if (!base_structure_extnames.includes(path.extname(file))) return file
    return true

}


module.exports = validate_extension