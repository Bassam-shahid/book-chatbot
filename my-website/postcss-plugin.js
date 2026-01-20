const path = require('path');

module.exports = {
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'tailwindcss-postcss-plugin',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};