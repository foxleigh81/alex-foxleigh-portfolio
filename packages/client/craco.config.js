module.exports = {
    style: {
        sass: {
          loaderOptions: {
            // Prefer 'sass' (dart-sass) over 'node-sass' if both packages are installed.
            implementation: require('sass'),
            prependData: `
            @use '../themes/breakpoints' as bp;
            @use '../themes' as vars;
            `,
            // Workaround for this bug: https://github.com/webpack-contrib/sass-loader/issues/804
            webpackImporter: false
          }
        },
      }
    }