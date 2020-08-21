module.exports = {
  extends: 'airbnb-base',
  rules: {
    // "for (var i; i < 10; i++)" is well-established and unambiguous.
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    'max-len': ['error', 200, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'object-curly-newline': ['error', {
      consistent: true,
    }],
    // const
    //  a = 1
    //  b = a + 1;
    // is a nice pattern.
    'one-var': 0,
    'no-cond-assign': [2, 'except-parens'],
    'quotes': [2, 'single', 'avoid-escape'],
    // When writing a module that will have several exports,
    // I don't want eslint telling me to default-export the first one,
    // just because it doesn't know about the others yet.
    // The author of the module should make the decision.
    'import/prefer-default-export': 'off',
    // Sometimes this is just confusing.
    // const target = { e };
    // vs
    // const target = e.target;
    'prefer-destructuring': 0,
    // As in this object, there are some keys that require quoting, and
    // some that don't. It's ugly IMO to have only some keys quoted.
    'quote-props': ['error', 'consistent'],

    // typescript is better at this. False positives when using assertNever.
    'consistent-return': 0,
    // ditto
    'array-callback-return': 0,
    // I _like_ nested ternary
    'no-nested-ternary': 0,
    // false positives when using JSX
    'no-unused-vars': 0,
    // false positives when using JSX
    '@typescript-eslint/no-unused-vars': 0,
    // breaks my formatting of nested ternaries.
    'operator-linebreak': 0,
    // breaks my formatting of nested ternaries
    'indent': 0,
    // functions are hoisted, get off my case
    'no-use-before-define': ['error', 'nofunc'],
    // any is a fact of life. better to be explicit.
    '@typescript-eslint/no-explicit-any': 0,
    // my build system is already gonna yell at me if my imports are bad.
    'import/no-unresolved': 0,
    // no reason for eslint to get involved. It might contradict what the build system needs
    'import/extensions': 0,
    // eslint doesn't seem to be able to tell when I'm using a package only at build time or whatever.
    // the dependencies/devDependencies distinction is largely imaginary anyway
    'import/no-extraneous-dependencies': 0,

  },
};
