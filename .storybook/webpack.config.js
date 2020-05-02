module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader'],
            }, {
                test: /\.css$/,
                use: {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    }
                }
            }
        ],
    },
}