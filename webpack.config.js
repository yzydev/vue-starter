const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/main.js",
  output: {
    clean: true,
    hashFunction: "md5",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
      scriptLoading: "blocking",
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: [".vue", ".js"],
  },
  target: "web",
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  performance: {
    hints: false,
  },
};
