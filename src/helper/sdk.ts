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
    templates: ['404.zid', 'account-addresses.zid', 'account-orders.zid', 'account-profile.zid', 'blog.zid', 'blogs.zid', 'categories.zid', 'category.zid', 'faqs.zid', 'cart.zid', 'home.zid', 'product.zid', 'products.zid', 'search.zid', 'shipping-and-payments.zid'],
    common: ['.zid', '.html'],
    modules: ['.zid', '.html'],
    assets: ['.js','.ts','.css','.scss','.map','.png','.jpg','.jpeg','.gif','.svg','.woff','.woff2','.otf','.ttf','.eot'],
    locals: ['.json'],
}


const optinal_folders_files: string[] = ['modules']


const root_required_files: string[] = ['query.json', 'layout.zid', 'header.zid', 'footer.zid']


const need_structure_validation: string[] = ['templates']


const sdk = {
    structure: structure, 
    optinal_folders_files: optinal_folders_files,
    root_required_files: root_required_files,
    need_structure_validation: need_structure_validation,
} 


export default sdk