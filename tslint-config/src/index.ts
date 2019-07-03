export const rules = {
  "only-arrow-functions": false,
  "no-submodule-imports": false,
  "member-access": false,
  "interface-name": false,
  "variable-name": false,
  "max-classes-per-file": false,
  "no-shadowed-variable": false,
  "curly": [true, "ignore-same-line"],
  "no-floating-promises": true,
  "object-literal-sort-keys": false,
  "ordered-imports": false,
  "ban-types": {
    "options": [
      ["Object", "Avoid using the `Object` type. Did you mean `object`?"],
      [
        "Function",
        "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
      ],
      ["Boolean", "Avoid using the `Boolean` type. Did you mean `boolean`?"],
      ["Number", "Avoid using the `Number` type. Did you mean `number`?"],
      ["String", "Avoid using the `String` type. Did you mean `string`?"],
      ["Symbol", "Avoid using the `Symbol` type. Did you mean `symbol`?"]
    ]
  },
  "new-parens": true,
  "prefer-const": true
}

// Workaround for "extends" being a keyword
const xtends = ["tslint:latest", "tslint-config-prettier"]
export { xtends as extends };
