# zid-theme preview

Preview your theme in development using a Zid demo store.

## Description

The `preview` command allows you to visualize your current theme in development using one of the demo stores associated with your Zid partner account. This feature helps you see how your theme looks and functions in a live environment before deployment.

## Usage

```bash
$ zid-theme preview --store_email <email>
```

## Required Options

- `--store_email <email>`: The email address associated with the development store you want to use for preview.

## Authentication

This command requires authentication to access your Zid partner account and development stores. If you're not already logged in, you'll be prompted to do so.

## Finding Your Development Stores

You can find a list of your development stores in the [Zid Partner Dashboard](https://partner.zid.sa/development-stores). Each store will have an associated email address that you'll use with this command.

## Example

```bash
$ zid-theme preview --store_email partner123@zid.dev
```

## Process

1. The command will authenticate your account (if not already authenticated).
2. It will locate the development store associated with the provided email.
3. Your current theme will be temporarily uploaded to the selected store.
4. A preview URL will be generated and displayed in your console.
5. You can open this URL in your web browser to see your theme in action.

## Notes

- Ensure you're in the root directory of your theme when running this command.
- Any changes made to your local files won't be reflected in the preview until you run the command again.

## Troubleshooting

If you encounter issues:

1. Verify that you're using the correct email for an existing development store.
2. Ensure you're authenticated by running `zid-theme login` first.
3. Check that your theme follows the required structure and passes validation.

For more information on theme development and testing, refer to the Zid Theme Development Documentation.
