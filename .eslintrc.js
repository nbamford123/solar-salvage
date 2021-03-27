module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:mdx/recommended',
  ],
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/destructuring-assignment': [
      2,
      'always',
      { ignoreClassFields: true },
    ],
    'react/prop-types': 0, // Disable prop-types as we use TypeScript for type checking
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', //
      },
    },
  ],
  ignorePatterns: ['graphql-types.ts'], // don't want this in gitignore
};
