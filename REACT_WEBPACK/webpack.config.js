const path = require("path")


module.exports = {
  // entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js"
  },
  devServer: {
    port: 3010,

  },
  module: {
    rules: [

      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      }
    ]
  },


  // plugins: [new HtmlWebpackPlugin()],
  // mode: process.env.NODE_ENV === "production" ? "production" : "development"
};