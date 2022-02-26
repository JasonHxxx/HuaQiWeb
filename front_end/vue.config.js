module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: "0.0.0.0",
    proxy: {
      "^/api": {
        // target: "http://courselearning.seec.seecoder.cn/",
        target: "http://localhost:8081",
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
