const appName = require('./package.json').name;
console.log("micro-ng----", appName)
module.exports = {
  devServer: {
    port: "4100",
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    library: `${appName}-[name]`,
    libraryTarget: 'umd',
    globalObject: "window",
    // jsonpFunction: `webpackJsonp_${appName}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
  },
};