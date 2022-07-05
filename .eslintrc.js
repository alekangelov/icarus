module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  plugins: ['@nrwl/nx', '@shopify', 'fp'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error'],
        '@nrwl/nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*'],
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nrwl/nx/typescript'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nrwl/nx/javascript'],
      rules: {},
    },
  ],
};
