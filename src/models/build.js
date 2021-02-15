const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const logger = require('../console/logger.js');
const delete_ds_store = require('../helper/delete_ds_store.js');

const archive = archiver('zip');

const folders = ['template', 'assets', 'modules', 'locals', 'common']
const extensions = ['zid', 'json', 'js', 'scss', 'css', 'png', 'svg', 'jpeg']


const validate_and_zip_folder = async (build_name, build_path) => {

    return new Promise((resolve, reject) => {

        let files_data = []

        fs.readdir(build_path, (err, files) => {

            if (err) return reject(`Unable to read the folder ${path.basename(build_path)}`)
            if (!files.includes('layout.zid')) return reject('Unable to find layout.zid')
            if (!files.includes('header.zid')) return reject('Unable to find header.zid')
            if (!files.includes('footer.zid')) return reject('Unable to find footer.zid')
    
            for (const file of files) {

                let file_data = {filename: file, path: path.resolve(build_path, file)}
                if (file == '.DS_Store') delete_ds_store(file_data.path)

                fs.lstat(file_data.path, (err, stats) => {
                    if (err) return reject(`Unable to read file ${file_data.path}`); 
                    logger.log(file)
                })
            }

            return resolve(`${build_name}.zip created successfully\n`)
        });

    })

}


const build = (build_name, build_path) => {


    build_name == null ? build_name = path.basename(build_path) : null

    logger.log()

    validate_and_zip_folder(build_name, build_path)
        .then(message => logger.log(message))
        .catch(e => logger.error(e))

}


module.exports = build