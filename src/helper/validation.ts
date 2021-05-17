import * as fs from 'fs'
import * as path from 'path'
import sdk from './sdk'
import delete_ds_store from './delete_ds_store'
import logger from '../console/logger'


const validate_theme = (build_path:string): Promise<string> => {

    return new Promise((resolve, reject) => {

        let files = fs.readdirSync(build_path)

        let valid_structure = validate_structure(files, sdk.structure.root);
        if (valid_structure !== true) return reject(`Unable to find:\n   ${valid_structure}\n\n   - Make sure theme path is correct or add required files\n`)

        for (const file of files) {

            let file_data = {filename: file, path: path.resolve(build_path, file)}
            let stats = null
            file == '.DS_Store' ? delete_ds_store(file_data.path) : stats = fs.lstatSync(file_data.path)

            if (stats && stats.isDirectory() && sdk.structure.root.includes(file)) {

                let subdir_files = fs.readdirSync(file_data.path)

                if (sdk.need_structure_validation.includes(file)) {
                    let valid_structure = validate_structure(subdir_files, sdk.structure[file]);
                    if (valid_structure !== true) return reject(`Unable to find in templates folder:\n   ${valid_structure}\n\n   - Make sure theme path is correct or add required files\n`)            
                }

                for (const subdir_file of subdir_files) {

                    let subdir_file_path = path.resolve(file_data.path, subdir_file)

                    if (subdir_file == '.DS_Store') {
                        delete_ds_store(subdir_file_path)
                        continue;
                    }

                    if (file == 'assets') validate_assets_file_size(subdir_file, subdir_file_path)

                    if (!sdk.need_structure_validation.includes(file)) {
                        let valid_ext = validate_extension(subdir_file, sdk.structure[file]);
                        if (valid_ext !== true) return reject(`Invalid extension ${valid_ext}\n   ${subdir_file} in ${file} folder\n`)
                    }
                }

            }
        }

        return resolve(`Theme validated`)
    })

}


const validate_extension = (file:string, base_structure_extnames:string[]): string | boolean => {

    let file_ext = path.extname(file)
    if (!base_structure_extnames.includes(file_ext)) return file_ext
    return true

}


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


const validate_assets_file_size = (file:string, filepath:string): void => {

    let stats = fs.lstatSync(filepath)
    if (stats.size >= sdk.MAX_ASSETS_FILE_SIZE_2MB) {
        logger.log(`WARNING: ${file} in assets is larger than 2MB: ${formatSizeUnits(stats.size)}`, 'yellow')
    }

}


const formatSizeUnits = (bytes:number): string => {

    let bytes_str:string = '';

    if      (bytes >= 1073741824) { bytes_str = (bytes / (1000*1000*1000)).toFixed(2) + "GB"; }
    else if (bytes >= 1048576)    { bytes_str = (bytes / (1000*1000)).toFixed(2) + "MB"; }
    else if (bytes >= 1024)       { bytes_str = (bytes / (1000)).toFixed(2) + "KB"; }
    else if (bytes > 1)           { bytes_str = bytes + " bytes"; }
    else if (bytes == 1)          { bytes_str = bytes + " byte"; }
    else                          { bytes_str = "0 bytes"; }

    return bytes_str;

}


const validate_build_args = (user_args: string[]) => {

    if (user_args[1]) {
        if (user_args[1] !== '--name' && user_args[1] !== '--path') {
            logger.error(`Invalid Argument ${user_args[1]}`)
        }
        else if (user_args[1] == '--name' && user_args[2] == '--path') {
            logger.error(`--name argument cannot be empty`)
        }
        else if (user_args[1] == '--path' && user_args[2] == '--name') {
            logger.error(`--path argument cannot be empty`)
        }
    }
    if (user_args[3]) {
        if (user_args[3] !== '--name' && user_args[3] !== '--path') {
            logger.error(`Invalid Argument ${user_args[3]}`)
        }
    }
    if (user_args[2] == '--name' || user_args[2] == '--path') {
        logger.error(`Invalid Argument ${user_args[2]} for ${user_args[1]}`)
    }
    if (user_args[4] == '--name' || user_args[4] == '--path') {
        logger.error(`Invalid Argument ${user_args[4]} for ${user_args[3]}`)
    }

    let build_path = process.cwd()
    let build_name = path.basename(process.cwd());

    for (let i = 1; i < user_args.length; i++) {
        if (user_args[i] == '--name' && user_args[i+1]) {
            build_name = user_args[i+1]
        }
        else if (user_args[i] == '--path' && user_args[i+1]) {
            build_path = path.resolve(process.cwd(), user_args[i+1] || '.')
        }
    }

    if (user_args.includes('--path') && !user_args.includes('--name')) {
        build_name = path.basename(build_path);
    }

    return { build_path: build_path, build_name: build_name }
}


const validate_new_args = (user_args: string[]) => {

    if (!user_args[1]) {
        logger.error('project name required')
    }

    return { theme_name: user_args[1] }
}


export default {
    validate_theme, 
    validate_extension,
    validate_structure,
    validate_build_args,
    validate_new_args,
    formatSizeUnits,
}