# 📦 @zidsa/themes-cli

A powerful CLI tool to assist Zid partners with theme development.

<p align="center">
  <a href="https://www.npmjs.com/package/@zidsa/themes-cli">
    <img src="https://img.shields.io/npm/v/@zidsa/themes-cli" alt="npm version">
  </a>
</p>

<p align="center">
  <img width="80%" src="https://partner.zid.sa/img/auth-logo.6b6cc800.png" alt="Zid Logo">
</p>

## 🔐 Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- NPM (Node Package Manager) or [Yarn](https://yarnpkg.com/)

## ⚙️ Installation

Ensure you have [Node.js](https://nodejs.org/en/) installed on your system. If you're starting a new project, initialize it with `npm init` or `yarn init`.

Install the package globally using npm:

```bash
npm install -g @zidsa/themes-cli
```

Or using Yarn:

```bash
yarn global add @zidsa/themes-cli
```

## 💻 Available Commands

| Command   | Description                                | Usage                          | Documentation                            |
| --------- | ------------------------------------------ | ------------------------------ | ---------------------------------------- |
| `build`   | Build your theme for deployment            | `themes-cli build [options]`   | [Build Documentation](docs/BUILD.md)     |
| `new`     | Create a new theme project                 | `themes-cli new [options]`     | [New Theme Documentation](docs/NEW.md)   |
| `help`    | Display help information for commands      | `themes-cli help`              | -                                        |
| `login`   | Authenticate with your Zid partner account | `themes-cli login`             | [Login Documentation](docs/AUTH.md)      |
| `list`    | List available themes in your account      | `themes-cli list`              | [List Documentation](docs/LISTING.md)    |
| `preview` | Preview your theme in a demo store         | `themes-cli preview [options]` | [Preview Documentation](docs/PREVIEW.md) |
| `update`  | Submit an update for your theme            | `themes-cli update [options]`  | [Update Documentation](UPDATE/update.md) |

For detailed information on each command, click the documentation links above or run:

```bash
themes-cli help
```

## 🚀 Quick Start

1. Install the `@zidsa/themes-cli` CLI tool globally.
2. Authenticate with your Zid partner account:
   ```bash
   themes-cli login
   ```
3. Create a new theme project:
   ```bash
   themes-cli new my-awesome-theme
   ```
4. Navigate to your new theme directory:
   ```bash
   cd my-awesome-theme
   ```
5. Build your theme:
   ```bash
   themes-cli build
   ```
6. Preview your theme in a demo store:
   ```bash
   themes-cli preview --store_email your-demo-store@zid.dev
   ```
7. Preview your theme in a demo store:
   ```bash
    themes-cli update --theme_id abc123def456 --change_type minor --release_notes "Added new footer design and improved mobile responsiveness"
   ```

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions, please:

- If you can't find a solution, open an issue in our [GitHub repository](https://github.com/zid/zid-theme/issues).

For more information on Zid theme development, visit our [official documentation](https://docs.zid.sa/).
