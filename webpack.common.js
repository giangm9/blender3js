const path = require('path');



module.exports = {
  entry: {
    app: './renderer/main.js'
  },
  output: {
    filename: 'hmi3d.js',
    path: path.resolve(__dirname, './public/js/')
  }
};
