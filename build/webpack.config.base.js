const path = require('path')
const merge = require('webpack-merge')
const devConf = require('./webpack.dev.config')
const proConf = require('./webpack.pro.config')
module.exports = (env) => {
    isDev = env.development

    const baseConf = {
        entry: {
            index: path.resolve(__dirname, '../src/index.js')
        },
        output: {
            filename: '[name]-[hash:8].js'
        }
    }
console.log(isDev)
    if(isDev) {
        return merge.smart(baseConf, devConf)
    }
    return merge.smart(baseConf, proConf)
}