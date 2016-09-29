import fs from 'fs'
import webpack from 'webpack'
import HtmlWebpack from 'html-webpack-plugin'
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin

let nodeModules = {}
fs.readdirSync('node_modules')
    .filter((x) => {
        return ['.bin'].indexOf(x) === -1
    })
    .forEach((mod) => {
        nodeModules[mod] = 'commonjs ' + mod
    })

/* Loaders */
const angularLoader = {
    preloaders: {
        test: /\.ts$/,
        loader: 'tslint'
    },
    loaders: [{
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts'
    }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
    }, {
        test: /\.scss$/,
        loader: 'raw!sass'
    }, {
        test: /\.html$/,
        loader: 'raw'
    }]
}

const defaultLoader = {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
    }]
}

/* Configs */
module.exports = {
    angularConfig: {
        entry: {
            vendor: ['./src/js/app/vendor'],
            app: ['./src/js/app/index']
        },
        resolve: {
            extensions: ['', '.ts', '.js']
        },
        devtool: 'source-map',
        output: {
            filename: '[name].bundle.js'
        },
        plugins: [
            new ChunkWebpack({
            	filename: 'vendor.bundle.js',
            	minChunks: Infinity,
            	name: 'vendor'
            }),
            new HtmlWebpack({
                filename: 'index.html',
                inject: 'main',
                template: './public/views/index.html'
            })
        ],
        module: angularLoader
    },
    initialConfig: {
        entry: './src/js/initial/initial.js',
        output: {
            filename: 'initial.bundle.js'
        },
        module: defaultLoader
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
        module: defaultLoader
    }
}
