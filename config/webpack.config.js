import fs from 'fs'
// import webpack from 'webpack'
// const ChunkWebpack = webpack.optimize.CommonsChunkPlugin
import HtmlWebpack from 'html-webpack-plugin'

// lets parser recognize node module filetypes
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
        loaders: ['ts', 'angular2-template']
    }, {
        test: /\.html$/,
        loader: 'raw'
    }, {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
        test: /\.scss$/,
        loader: 'raw!sass'
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
        debug: true,
        entry: {
            vendor: ['./src/app/vendor'],
            app: ['./src/app/index'],
            // webAnimations: ['./bower_components/web-animations-js/web-animations.min.js']
        },
        resolve: {
            extensions: ['', '.ts', '.js']
        },
        devtool: 'source-map',
        output: {
            filename: '[name].bundle.js'
        },
        plugins: [
            new HtmlWebpack({
                inject: 'body',
                template: './src/templates/index.html'
            })
        ],
        module: angularLoader
    },
    initialConfig: {
        entry: {
            initial: ['./src/app/initial/initial']
        },
        output: {
            filename: '[name].bundle.js'
        },
        module: defaultLoader
    }
    backendConfig: {
        entry: './server.js',
        target: 'node',
        output: {
            filename: '[name].bundle.js'
        },
        node: {
            __dirname: true,
            __filename: true
        },
        externals: nodeModules,
        module: defaultLoader
    }
}
