# themes-cli build

Build your Zid theme for deployment.

## Description

The `build` command compiles and packages your Zid theme into a deployable zip file. By default, it assumes the current directory contains the theme and uses the root directory name for the output zip file.

## Usage

```bash
$ themes-cli build [options]
```

## Options

- `--path <directory>`: Specify the path to the theme directory (default: current directory)
- `--name <name>`: Set a custom name for the output zip file (default: root folder name)

## Theme Structure Requirements

The following structure is required for a valid Zid theme SDK. All mentioned files and folders are mandatory, though some folders (like modules, locals, assets) can be empty.

```bash
$ root
.
┃
┃─── query.json
┃─── layout.twig
┃─── header.twig
┃─── footer.twig
┃
┃─── templates (accepted extensions: [ '.twig' ] )
┃    ┃─── 404.twig
┃    ┃─── home.twig
┃    ┃─── search.twig
┃    ┃─── products.twig
┃    ┃─── product.twig
┃    ┃─── categories.twig
┃    ┃─── category.twig
┃    ┃─── blogs.twig
┃    ┃─── blog.twig
┃    ┃─── faqs.twig
┃    ┃─── cart.twig
┃    ┃─── shipping-and-payments.twig
┃    ┃─── account-addresses.twig
┃    ┃─── account-orders.twig
┃    ┃─── account-profile.twig
┃
┃─── modules (accepted extensions: ['.twig'] )
┃
┃─── common (accepted extensions: ['.twig'] )
┃
┃─── locals (accepted extensions: ['.json'] )
┃
┃─── assets
```

### Directory Specifications

- `templates/`: Twig template files (accepted extensions: `.twig`)
- `modules/`: Reusable module templates (accepted extensions: `.twig`)
- `common/`: Common template parts (accepted extensions: `.twig`)
- `locals/`: Localization files (accepted extensions: `.json`)
- `assets/`: Theme assets (see accepted extensions below)

### Assets Accepted Extensions

```
.js, .ts, .css, .scss, .map, .png, .jpg, .jpeg, .gif, .svg, .woff, .woff2, .otf, .ttf, .eot
```

## Examples

Build the theme in the current directory:
```bash
$ themes-cli build
```

Build the theme from a specific path:
```bash
$ themes-cli build --path ./my-theme-folder
```

Build the theme with a custom output name:
```bash
$ themes-cli build --name best-theme-ever
```

Full command with custom path and name:
```bash
$ themes-cli build --name best-theme-ever --path ./my-theme-folder
```

## Notes

- Ensure your theme follows the required structure before building.
- The build process will validate your theme structure and throw an error if it's invalid.
- If no `--name` is specified, the output zip will be named after the root directory.
- Always verify the contents of the generated zip file before deployment.

For more information on theme development and deployment, refer to the Zid Theme Development Documentation.
