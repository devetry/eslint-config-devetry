@devetry/prettier-config
========================
Devetry's base prettier config

## Usage
### Install

`npm install --save-dev @devetry/prettier-config`

### Edit your `package.json`

```
{
  ...
  "prettier": "@devetry/prettier-config",
  ...
}
```

If you're also using eslint (recommended), turn off any eslint-based rules that conflict with prettier. To do this easily, you can run

```bash
npm install --save-dev eslint-config-prettier
```

and add `"prettier"` to your eslint config plugin:

```diff
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "@devetry/eslint-config",
+       "prettier"
    ],
```
