var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'App.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test:  /\.jsx|.js$/,
                include: [
                    path.resolve(__dirname)
                ],
                exclude: [
                    path.resolve(__dirname, '../node_modules') 
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }
        ]
    }
}