# themes-cli list

List all themes associated with your Zid partner account.

## Description

The `list` command retrieves and displays a table of all themes you have in your account. This helps you quickly view your themes, their versions, and creation dates.

## Usage

```bash
$ themes-cli list [options]
```

## Options

Currently, this command doesn't have any additional options.

## Authentication

This command requires authentication. If you're not signed in, you'll be prompted to log in first. Use the `themes-cli login` command if you need to authenticate.

## Output

The command outputs a table with the following columns:

- Theme ID: A unique identifier for each theme
- Name: The name of the theme
- Version: The current version of the theme
- Created At: The date when the theme was created

## Example Output

```bash
┌────────────────────────────────────────┬────────────────┬─────────┬──────────────┐
│ Theme ID                               │ Name           │ Version │ Created At   │
├────────────────────────────────────────┼────────────────┼─────────┼──────────────┤
│ 82fc51n3-0a8t-42r0-a7wc-e2tabbc6735b   │ Awesome Theme  │ 1.0.0   │ 2024-07-08   │
│ 7abc1234-5def-6789-0ghj-klmnopqrstuv   │ Cool Store     │ 2.1.3   │ 2024-08-15   │
│ 9876wxyz-5432-mnop-qrst-uvwxyz123456   │ Sleek Design   │ 1.2.1   │ 2024-09-22   │
└────────────────────────────────────────┴────────────────┴─────────┴──────────────┘
```

## Notes

- Ensure you have an active internet connection to fetch the latest theme data.
- The Theme ID is useful for other commands that might require specifying a particular theme.


For more information on managing your themes, refer to the Zid Theme Development Documentation.