# zid-theme new

Create a new Zid theme using our starter template.

## Usage

```bash
zid-theme new <theme-name>
```

## Arguments

- `<theme-name>`: The name of your new theme (required)

## Description

The `new` command initializes a new Zid theme project with the specified name. It creates the necessary file structure and installs required dependencies to get you started quickly.

## Theme Structure

The new theme will be created with the following structure:

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

### Directory Descriptions

- `templates/`: Contains Twig template files for various pages (accepted extensions: `.twig`)
- `modules/`: For reusable module templates (accepted extensions: `.twig`)
- `common/`: For common template parts (accepted extensions: `.twig`)
- `locals/`: For localization files (accepted extensions: `.json`)
- `assets/`: For theme assets like images, CSS, and JavaScript files

## Examples

Create a new theme with default options:
```bash
zid-theme new my-awesome-theme
```

## Post-Creation Steps

After creating your new theme:

1. Navigate to the theme directory:
   ```bash
   cd <theme-name>
   ```
2. Start customizing your theme by editing the Twig templates and adding your styles and scripts in the `assets/` directory.

3. Use other `zid-theme` commands like `build` and `preview` to test and develop your theme.

## Notes

- Ensure you have the necessary permissions to create directories in the chosen location.
- The theme name should be unique and follow naming conventions (lowercase, no spaces, use hyphens or underscores).
- After creation, you can use version control (like Git) to manage your theme development.

For more information on theme development, refer to the Zid Theme Development Documentation.
