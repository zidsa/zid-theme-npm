interface SDKStructure {
    root: string[],
    templates: string[],
    common: string[],
    modules: string[],
    assets: string[],
    locals: string[],
    [key: string]: string[];
}

const sdk_structure: SDKStructure = {
    root: ['query.json', 'layout.zid', 'header.zid', 'footer.zid', 'templates', 'modules', 'locals', 'common', 'assets'],
    templates: ['.zid'],
    common: ['.zid', '.html'],
    modules: ['.zid', '.html'],
    assets: ['.js','.ts','.css','.scss','.map','.png','.jpg','.jpeg','.gif','.svg','.woff','.woff2','.otf','.ttf','.eot'],
    locals: ['.json'],
}


export default sdk_structure