const validate_structure = (files, base_structure) => {

    let missed_files = []

    for (let i = 0; i < base_structure.length; i++) {
        if (!files.includes(base_structure[i])) missed_files.push(base_structure[i])
    }
    
    if (missed_files === []) return true
    return JSON.stringify(missed_files)
}


module.exports = validate_structure