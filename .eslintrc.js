module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'], // Enforces Prettier formatting
  },
};
