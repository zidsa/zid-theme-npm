const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const logger = require('../console/logger.js');
const validate_theme = require('./validate_theme.js');
const sdk_structure = require('./sdk_structure.js');

const archive = archiver('zip');


const zip_theme = async (build_name, build_path) => {


    try {
        let valid_theme = await validate_theme(build_path)   
        logger.log(valid_theme)
    } catch (error) {
        logger.error(error)
    }

    const output = fs.createWriteStream(path.resolve(build_path, `${build_name}.zip`));
    
    output.on('close', function() {
        logger.log(archive.pointer() + ' total bytes');
        logger.log(`${build_name}.zip successfully created!\n`);
    });

    archive.pipe(output);

    let required_files = ['layout.zid', 'header.zid', 'footer.zid']
    required_files.forEach(file => {
        archive.append(fs.createReadStream(path.resolve(build_path, file)), { name: file });
    })

    for (folder in sdk_structure) {

        if (folder !== 'root') {

            let files = fs.readdirSync(path.resolve(build_path, folder))

            archive.append(null, { name: `${folder}/` });

            files.forEach(file => {
                let file_path = path.resolve(build_path, folder, file)
                archive.append(fs.createReadStream(file_path), { name: `${folder}/${file}` });
            })
        }
    }

    archive.finalize();
}


module.exports = zip_theme