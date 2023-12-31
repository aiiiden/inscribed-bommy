/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */

module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],

  // Tailwind CSS
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['clsx', 'cn'],

  // Sort imports
  importOrder: ['<THIRD_PARTY_MODULES>', '@/(.*)$', '^[./](.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
