const { defineConfig } = require("@vue/cli-service");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin(),
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
    ],
  },
});
