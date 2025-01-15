interface SDKStructure {
    root: string[],
    templates: string[],
    common: string[],
    modules: string[],
    assets: string[],
    locals: string[],
    [key: string]: string[];
}

const structure: SDKStructure = {
    root: ['templates', 'modules', 'locals', 'assets'],
    templates: ['landing_page.twig'],
    common: ['.twig'],
    modules: ['.twig'],
    assets: ['.js','.ts','.css','.scss','.map','.png','.jpg','.jpeg','.gif','.svg','.woff','.woff2','.otf','.ttf','.eot'],
    locals: ['.json'],
}

const optinal_root_files: string[] = ['modules']

const optinal_files: SDKStructure = {
    root: ['modules'],
    templates: [],
    common: [],
    modules: [],
    assets: [],
    locals: [],
}

const root_allowed_files: string[] = ['landing_page.twig']

const need_structure_validation: string[] = ['templates']

const MAX_ASSETS_FILE_SIZE_2MB:number = 2*1000000

const MAX_ZIP_FILE_SIZE_50MB:number = 50*1000000


const sdk_landing_page = {
    structure: structure, 
    optinal_root_files: optinal_root_files,
    optinal_files: optinal_files,
    root_allowed_files: root_allowed_files,
    need_structure_validation: need_structure_validation,
    MAX_ASSETS_FILE_SIZE_2MB: MAX_ASSETS_FILE_SIZE_2MB,
    MAX_ZIP_FILE_SIZE_50MB: MAX_ZIP_FILE_SIZE_50MB,
} 


export default sdk_landing_page