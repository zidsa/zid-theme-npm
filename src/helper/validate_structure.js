const validate_structure = (files, base_structure) => {

    for (let i = 0; i < base_structure.length; i++) {
        if (!files.includes(base_structure[i])) return base_structure[i]
    }
    return true

}


module.exports = validate_structure