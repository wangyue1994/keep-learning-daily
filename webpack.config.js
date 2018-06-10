const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
        {
            test: /\.less$/,
            // 改成：exclude: [path.resolve(__dirname, 'node_modules')]，使用绝对路径
            // 注意点：
            // 1. 需要在当前的webpack.config文件中引入node.js的path模块
            // 2. 需要确认当前使用的这个webpack.config文件是否和 node_modules在同一级目录下，如果不是，需要相应修改 => path.resolve(__dirname, 'node_modules') 这条
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }
      ]
  }
};