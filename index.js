module.exports = {
  extends: 'airbnb-base',
  rules: {
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
    'arrow-body-style': 0,
    'one-var': 0,
    'no-cond-assign': [2, 'except-parens'],
    'quotes': [2, 'single', 'avoid-escape'],
    'import/prefer-default-export': 'off',
    'prefer-destructuring': 0,
    'quote-props': ['error', 'consistent'],
  },
};
