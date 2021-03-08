import sdk from './sdk'


const validate_structure = (files:string[]): string | boolean => {

    let missed_files: string[] = [];

    for (let i = 0; i < sdk.structure.root.length; i++) {
        if (!files.includes(sdk.structure.root[i]) && !sdk.optinal_folders_files.includes(sdk.structure.root[i])) {
            missed_files.push(sdk.structure.root[i])
        }
    }

    if (missed_files.length === 0) return true
    return JSON.stringify(missed_files)
}


export default validate_structure