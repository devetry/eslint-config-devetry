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

## Rule Philosophy

Our guideline for choosing rules asks that we consider three questions:

1. If this rule changes formatting, does it ever make it worse?
2. Could this rule potentially prevent a bug?
3. Is ESLint the to best place to warn about this error?

That third rule exists to remind us that other tools have our back. Following ESLint's default recommendations would sometimes break our bundler, or add redundant code when typescript was gonna catch the problem anyway. For example, `consistent-return` and `array-callback-return` can't recognize an exhaustive switch, and will yell about the function failing to return a value in all cases. But typescript knows more about our code and can tell that it's fine. typescript is better at checking for that type of error, so we turn those rules off.

Similarly, `import/no-unresolved` would be a redundant check. Running a build (babel or webpack or typescript or whatever) is already going to tell me if an import is bad. With this eslint rule on, all we've done is add work to make sure ESLint understands all our imports without any actual gain.

If you're not using typescript in your project, consider using a different set of eslint rules.

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

## Build tool integration

It's possible to integrate eslint with webpack, so a build will fail in the presence of any linting errors. This, IMO, is a mistake. Sometimes I want to try something out and I'll clean it up later. Sometimes I want a `debugger` in my local build and I don't want to fight my tools to get it there. Run them as separate tools.
