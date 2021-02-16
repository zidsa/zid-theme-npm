const fs = require('fs');
const path = require('path');
const sdk_structure = require('./sdk_structure.js');
const delete_ds_store = require('./delete_ds_store.js');
const validate_extension = require('./validate_extension.js');
const validate_structure = require('./validate_structure.js');


const validate_theme = (build_path) => {

    return new Promise((resolve, reject) => {

        let files = fs.readdirSync(build_path)

        let valid_structure = validate_structure(files, sdk_structure.root);
        if (valid_structure !== true) return reject(`Unable to find ${valid_structure}\n   - Make sure theme path is correct\n`)

        for (const file of files) {

            let file_data = {filename: file, path: path.resolve(build_path, file)}
            let stats = null
            file == '.DS_Store' ? delete_ds_store(file_data.path) : stats = fs.lstatSync(file_data.path)

            if (stats && stats.isDirectory() && sdk_structure.root.includes(file)) {

                let subdir_files = fs.readdirSync(file_data.path)
                for (const subdir_file of subdir_files) {
                    if (subdir_file == '.DS_Store') {
                        delete_ds_store(path.resolve(file_data.path, subdir_file))
                        continue;
                    }
                    let valid_ext = validate_extension(subdir_file, sdk_structure[file]);
                    if (valid_ext !== true) return reject(`Invalid extension ${valid_ext}\n   ${subdir_file} in ${file} folder\n`)
                }

            }
        }

        return resolve(`Theme validated`)
    })

}


module.exports = validate_theme