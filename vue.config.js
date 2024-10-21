// vue.config.js
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // Proxy requests matching '/api' to 'https://example.com'
    // Change the target to your API server
    

  }
});
