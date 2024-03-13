const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, 'src/frontend/styles/main.scss'),
      ]
    }
  },
  pages: {
    index: {
      entry: 'src/frontend/main.js',
      template: 'src/frontend/public/index.html',
      filename: 'index.html',
      title: 'My App'
    }
  }
})
