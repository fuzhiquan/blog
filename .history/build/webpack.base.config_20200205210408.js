const path = require('path')

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

    return base
}