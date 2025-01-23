# themes-cli login

Authenticate your CLI tool with your Zid partner account.

## Usage

```bash
$ themes-cli login
```

## Description

The `login` command initiates the authentication process, allowing you to connect your CLI tool with your Zid partner account. This authentication is required to use most of the themes-cli commands.

## Authentication Process

1. When you run the `login` command, it will start a local Express server listening on port 4444.
2. Your default web browser will open automatically, directing you to the [Zid Partner Dashboard](https://partner.zid.sa/).
3. Log in to your Zid partner account through the dashboard.
4. Once logged in, the dashboard will redirect you back to the local server, completing the authentication process.
5. The CLI tool will receive and securely store your authentication tokens.

## Important Notes

- The authentication process requires an active internet connection.
- Ensure that port 4444 is available on your local machine. If this port is in use by another application, the authentication flow may not work as expected.
- Your login session will be stored locally and securely. You won't need to log in again unless your session expires or you manually log out.

## Troubleshooting

If you encounter any issues during the login process:

1. Ensure you have a stable internet connection.
2. Check if port 4444 is free. You can change the port used by other applications if necessary.
3. If the browser doesn't open automatically, manually navigate to `http://localhost:4444` after running the login command.
4. Clear your browser cache and cookies if you experience persistent login issues.

## Example

```bash
$ themes-cli login
Starting authentication process...
Opening Zid Partner Dashboard in your default browser...
Waiting for authentication...
Successfully authenticated! You can now use themes-cli commands.
```

## Security

Your authentication tokens are stored securely on your local machine. Always ensure you're using the official themes-cli CLI tool and keep your system secure to protect your account information.
