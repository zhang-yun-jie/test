// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });
const path = require("path");
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  publicPath: isProd ? "/test/" : "/", // 打包后的文件引入路劲 平台
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false, // 去除生成环境source map
  devServer: {
    open: false,
    host: "0.0.0.0",
    hot: "only",
    static: {
      directory: path.join(__dirname, "static"),
    },
    devMiddleware: {
      publicPath: isProd ? "/test/" : "/",
    },
    port: 8080,
    compress: true,
  },
};
