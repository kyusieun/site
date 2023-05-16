const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    proxy: {
      "/oauth2": {
        target:
          "http://ec2-3-39-206-176.ap-northeast-2.compute.amazonaws.com:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  transpileDependencies: true,
});
