const path = require('path')
module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
        compress: true,
        contentBase: path.resolve(__dirname, '../dist'),
        open: true,
        hot: true
    }
}