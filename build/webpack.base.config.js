const path = require('path')
const merge = require('webpack-merge')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

module.exports = (env) => {
    const isDev = env.development

    const base = {
        entry: {
            index: path.resolve(__dirname, '../src/index.js')
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                }
            ]
        }
    }

    return merge(base, isDev ? devConfig : proConfig)
}