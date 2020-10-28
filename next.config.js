const withImages = require('next-images')

module.exports = withImages({
    sassOptions: {
      outputStyle: 'expanded',
      indentWidth: 4,
      prependData: `
        @use '@themes/vars' as vars;
        @use '@themes/breakpoints' as bp;
      `
    }
})