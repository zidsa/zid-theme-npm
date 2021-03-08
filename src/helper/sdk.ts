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
    root: ['query.json', 'layout.zid', 'header.zid', 'footer.zid', 'templates', 'modules', 'locals', 'common', 'assets'],
    templates: ['.zid'],
    common: ['.zid', '.html'],
    modules: ['.zid', '.html'],
    assets: ['.js','.ts','.css','.scss','.map','.png','.jpg','.jpeg','.gif','.svg','.woff','.woff2','.otf','.ttf','.eot'],
    locals: ['.json'],
}


const optinal_folders_files = ['modules']


const root_required_files: string[] = ['query.json', 'layout.zid', 'header.zid', 'footer.zid']


const sdk = {
    structure: structure, 
    optinal_folders_files: optinal_folders_files,
    root_required_files: root_required_files
} 


export default sdk