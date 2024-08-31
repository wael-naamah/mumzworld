module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
          baseUrl: './',
          alias: {
            '@components': 'src/components/index',
          },
        },
      ],

      // NOTE: this is only necessary if you are using reanimated for animations
      'react-native-reanimated/plugin',
    ],
  };
};
