import sdk from './sdk'


const validate_structure = (files:string[], structure:string[]): string | boolean => {

    let missed_files: string[] = [];

    for (let i = 0; i < structure.length; i++) {
        if (!files.includes(structure[i]) && !sdk.optinal_folders_files.includes(structure[i])) {
            missed_files.push(structure[i])
        }
    }

    if (missed_files.length === 0) return true
    return JSON.stringify(missed_files)
}


export default validate_structure