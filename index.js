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
  },
};
