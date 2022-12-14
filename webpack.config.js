const HtmlWebpackPlugin = require("html-webpack-plugin"); // Require  html-webpack-plugin plugin
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: __dirname + "/src/js/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + "/dist", // Folder to store generated bundle
    filename: "bundle.js", // Name of generated bundle after build
    publicPath: "/", // public URL of the output directory when referenced in a browser
  },
  module: {
    // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader", // js polifill & transpiler
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp|mp4|webm)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      inject: "body",
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: "src/img",
          to: "img",
        },
      ],
    }),
  ],
  devServer: {
    // configuration for webpack-dev-server
    static: "./src", //source of static assets
    port: 3000, // port to run dev-server
  },
  // mode: "production",
  stats: {
    warnings: false,
  },
};
