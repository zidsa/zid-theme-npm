const validate_structure = function (files:string[], base_structure:string[]): string | boolean {

    let missed_files: string[] = [];

    for (let i = 0; i < base_structure.length; i++) {
        if (!files.includes(base_structure[i])) missed_files.push(base_structure[i])
    }
    
    if (missed_files.length === 0) return true
    return JSON.stringify(missed_files)
}


export default validate_structure