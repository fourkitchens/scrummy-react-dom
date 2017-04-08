const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin, optimize } = require("webpack");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const NODE_ENV = process.env.NODE_ENV
  ? process.env.NODE_ENV.toLowerCase()
  : "development";

// Plugins
const plugins = [];

plugins.push(
  new HtmlWebpackPlugin({
    template: "src/index.html",
    inject: "body",
    filename: "index.html"
  })
);

if (NODE_ENV === "production" || NODE_ENV === "analyse-bundle") {
  plugins.push(
    new FaviconsWebpackPlugin({
      logo: "./src/assets/logo.png",
      inject: true
    })
  );
  plugins.push(new optimize.DedupePlugin());
  plugins.push(
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    })
  );
  plugins.push(
    new optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  );
  plugins.push(new ExtractTextPlugin("scrummy.[hash].css"));
  plugins.push(new ImageminPlugin("./**/*"));
  plugins.push(new StyleExtHtmlWebpackPlugin());
}
if (NODE_ENV === "analyse-bundle") {
  plugins.push(new BundleAnalyzerPlugin());
}

// Loaders
const loaders = [
  {
    test: /\.yaml$/,
    loaders: ["json", "yaml"]
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ["babel"]
  },
  {
    test: /\.png|.svg|.jpg|.gif$/,
    loaders: ["file"]
  }
];

if (NODE_ENV === "production" || NODE_ENV === "analyse-bundle") {
  loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract("style", ["css", "postcss", "sass"])
  });
} else {
  loaders.push({
    test: /\.scss$/,
    loaders: ["style", "css", "postcss", "sass"]
  });
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "scrummy.[hash].js"
  },
  module: {
    loaders
  },
  postcss: () => [autoprefixer],
  plugins
};
