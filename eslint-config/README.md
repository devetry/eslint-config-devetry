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
