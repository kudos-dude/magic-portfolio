import path from 'path';

export default {
  extensions: ['*', '.js', '.jsx', '.json'],
  alias: {
    'react-dom': '@hot-loader/react-dom',

    assets: path.resolve(__dirname, './assets'),
    ducks: path.resolve(__dirname, './src/ducks'),
    scenes: path.resolve(__dirname, './src/scenes'),
    shared: path.resolve(__dirname, './src/shared'),
    lib: path.resolve(__dirname, './lib'),
    utils: path.resolve(__dirname, './src/utils')
  }
};
