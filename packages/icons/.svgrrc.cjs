// packages/icons/.svgrrc.cjs
module.exports = {
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              // The convertColors plugin is part of the default preset.
              // We enable its currentColor option here to convert all
              // fill/stroke values to currentColor.
              convertColors: {
                currentColor: true,
              },
              // Keep the viewBox attribute for proper scaling.
              removeViewBox: false,
            },
          },
        },
      ],
    },
  };