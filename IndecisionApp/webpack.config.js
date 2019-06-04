const path = require("path");

// Entry -> Output
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    // So that error message leads us to (e.g. components file with that error) NOT bundle.js
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public")
    }
};

// loader
