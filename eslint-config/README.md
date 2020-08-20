@devetry-eslint-config
======================

## Installation

```bash
# First, install eslint
npm install eslint --save-dev

# then set up an eslint configuration file
npx eslint --init # follow the prompts about your project
```

Now, add our config

```bash
npm install @devetry/eslint-config --save-dev
```

Add the config to your `.eslintrc` file:

```diff
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
+       "@devetry/eslint-config",
    ],
```

## Editor integration

You'll experience less pain from eslint if you know about it's complaints before CI fails because of them. I reccommend setting up your editor to report what ESLint is complaining about and to apply auto-fixes on each save.

### VSCode

Install the ESLint extension: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Add the following settings to your project's `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true
}
```

_Protip_: If you want these settings to apply globally to every project you work on, you can set them in ~/.config/Code/User/settings.json instead.
