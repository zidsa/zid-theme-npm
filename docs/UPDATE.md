# zid-theme update

Submit an update for your theme after completing development.

## Description

The `update` command allows you to submit a new version of your theme to the Zid platform. Use this command when you've made changes to your theme and are ready to release an update.

## Usage

```bash
zid-theme update --theme_id <theme_id> --change_type <change_type> --release_notes <release_notes>
```

## Required Options

- `--theme_id <theme_id>`: The unique identifier of the theme you want to update. You can find this ID using the `zid-theme list` command.

- `--change_type <change_type>`: The type of changes made in this update. Valid options are:
    - `major`: Significant changes that may affect theme compatibility
    - `minor`: New features added without breaking changes
    - `patch`: Bug fixes and small improvements

- `--release_notes <release_notes>`: A brief description of the changes made in this update. Use quotation marks if your notes contain spaces.

## Example

```bash
zid-theme update --theme_id abc123def456 --change_type minor --release_notes "Added new footer design and improved mobile responsiveness"
```

## Notes
- This command will build the theme and upload it to Zid, so if your internet is slow, it will take sometime
- The `theme_id` must correspond to an existing theme in your Zid partner account.
- Choose the `change_type` carefully as it affects the version number of your theme.
- Provide clear and concise release notes to help merchants understand what's new or changed.

## Authentication

This command requires you to be authenticated with your Zid partner account. If you're not already logged in, use the `zid-theme login` command first.

For more information on theme versioning and updates, refer to the Zid Theme Development Documentation.