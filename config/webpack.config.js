import fs from 'fs'

let loaders = {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }]
}

let nodeModules = {}
fs.readdirSync('node_modules')
    .filter((x) => {
        return ['.bin'].indexOf(x) === -1
    })
    .forEach((mod) => {
        nodeModules[mod] = 'commonjs ' + mod
    })

module.exports = {
    frontendConfig: {
        entry: './src/js/app.js',
        output: {
            filename: 'app.bundle.js'
        },
        module: loaders
    },
    backendConfig: {
        entry: './server.js',
        target: 'node',
        output: {
            filename: 'server.bundle.js'
        },
        node: {
            __dirname: true,
            __filename: true
        },
        externals: nodeModules,
        module: loaders
    }
}
