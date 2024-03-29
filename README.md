# 📦 zid-theme

#### NPM package to validate and zip the theme folder to match zid custom themes' standards

<br />
<br />

<p align="center">
    <a href="https://npmjs.org/package/zid-theme">
        <img src="https://img.shields.io/npm/v/zid-theme"> 
    </a>
</p>

<br />
<br />

<p align="center">
    <a href="#" style="cursor: default;">
        <img width="80%" src="https://camo.githubusercontent.com/15ad718c0d974a97796d5151dd654487f8dfdea5ff88f9f1805bc06144c894f5/68747470733a2f2f7765622e7a69642e73612f696d616765732f7a69645f66756c6c5f6c6f676f2e706e67"> 
    </a>
</p>

<br />
<br />

# 🔐 Prerequisites:

- Node.js
- NPM (Node Package Manager)
  
<br />
<br />

# ⚙️ Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

or if yarn is used, with [`yarn init` command](https://yarnpkg.com/cli/init).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash 
$ npm i -g zid-theme
```


Installation is done using the
[`yarn add` command](https://yarnpkg.com/cli/add):
```bash 
$ yarn add global zid-theme
```

<br />
<br />

# 💻 Usage

The following structure is the valid theme SDK structure that has to be followed, othewise an error will be thrown. All the mentioned files and folders are required, and folders can be empty (Such as modules, locals, assets)

[See here for accepted assets extension](#assets-accepted-extensions)

<br />


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

### assets accepted extensions

```bash
['.js','.ts','.css','.scss','.map','.png','.jpg','.jpeg','.gif','.svg','.woff','.woff2','.otf','.ttf','.eot']
```
<br />
<br />

### ⚡️ build command


Running the build command only without arguments, will assume the current path is where the theme exist, and the theme zip will be named after the root directory name

```bash
$ zid-theme build
```

The following command takes two arguments `--path` and `--name`

### To set the path of the theme (default .):

```bash
$ zid-theme build --path ./theme_path
```

### To set the name of the theme (root folder name):

```bash
$ zid-theme build --name best-theme-ever
```

### Full command:

```bash
$ zid-theme build --name best-theme-ever --path .
```

<br />
<br />

# License

[MIT](LICENSE)
