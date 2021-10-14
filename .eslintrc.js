module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    // Your environments (which contains several predefined global variables)
    browser: true,
    node: true,
  },
  globals: {},
  rules: {
    // Customize your rules
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'no-console': 'error',
    curly: 'error',
  },
}
