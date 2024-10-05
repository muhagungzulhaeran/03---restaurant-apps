const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: "./sw.bundle.js",
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith("https://restaurant-api.dicoding.dev"),
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "restaurant-api",
          },
        },
        {
          urlPattern: ({ url }) => url.origin === "https://kit.fontawesome.com",
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "icons-fav",
          },
        },
        {
          urlPattern: ({ url }) => url.origin === "https://fonts.googleapis.com",
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "font-poopins",
          },
        },
      ],
    }),
  ],
});
