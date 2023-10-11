const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require("webpack-merge");
const { name } = require("./package.json");

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  const singleSpaConfig = {
    output: {
      library: name,
      libraryTarget: "umd"
    },
  }

  const mergedConfig = webpackMerge.merge(
    singleSpaWebpackConfig,
    singleSpaConfig
  )

  // Feel free to modify this webpack config however you'd like to
  return mergedConfig;
};
