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

## Setting up your editor

Prettier is most useful if you run it interactively in your editor. Refer to the docs to see how to do it for your editor: https://prettier.io/docs/en/editors.html
