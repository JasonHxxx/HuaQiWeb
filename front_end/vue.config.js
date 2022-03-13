module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: "0.0.0.0",
    proxy: {
      "^/api": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true
        // pathRewrite: {
        // '^/api/': '/', // remove base path
        // },
      }
    },
    disableHostCheck: true
  }
};
