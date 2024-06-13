const expectedTypes = [
  'ci',
  'chore',
  'docs',
  'ticket',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
];

module.exports = {
  // extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'custom-type-enum': ({ type }) => {
          if (!expectedTypes.includes(type)) {
            return [
              false,
              `Type must be one of: ${expectedTypes.join(', ')} \nExample: feat: add new feature`,
            ];
          }
          return [true];
        },
      },
    },
  ],
  rules: {
    'custom-type-enum': [2, 'always'],
  },
};
