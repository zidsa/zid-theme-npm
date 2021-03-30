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
    root: ['query.json', 'layout.twig', 'header.twig', 'footer.twig', 'templates', 'modules', 'locals', 'common', 'assets'],
    templates: ['404.twig', 'account-addresses.twig', 'account-orders.twig', 'account-profile.twig', 'blog.twig', 'blogs.twig', 'categories.twig', 'category.twig', 'faqs.twig', 'cart.twig', 'home.twig', 'product.twig', 'products.twig', 'search.twig', 'shipping-and-payments.twig'],
    common: ['.twig'],
    modules: ['.twig'],
    assets: ['.js','.ts','.css','.scss','.map','.png','.jpg','.jpeg','.gif','.svg','.woff','.woff2','.otf','.ttf','.eot'],
    locals: ['.json'],
}

const optinal_folders_files: string[] = ['modules']

const root_required_files: string[] = ['query.json', 'layout.twig', 'header.twig', 'footer.twig']

const need_structure_validation: string[] = ['templates']

const MAX_ASSETS_FILE_SIZE_2MB:number = 2*1000000

const MAX_ZIP_FILE_SIZE_50MB:number = 50*1000000


const sdk = {
    structure: structure, 
    optinal_folders_files: optinal_folders_files,
    root_required_files: root_required_files,
    need_structure_validation: need_structure_validation,
    MAX_ASSETS_FILE_SIZE_2MB: MAX_ASSETS_FILE_SIZE_2MB,
    MAX_ZIP_FILE_SIZE_50MB: MAX_ZIP_FILE_SIZE_50MB,
} 


export default sdk