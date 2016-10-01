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
const frontendLoader = {
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
        test: /\.html$/,
        loader: 'raw'
    }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
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
    frontendConfig: {
		debug: true,
        entry: {
			initial: ['./src/app/initial/initial.js'],
            vendor: ['./src/app/vendor'],
            app: ['./src/app/index']
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
        module: frontendLoader
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
