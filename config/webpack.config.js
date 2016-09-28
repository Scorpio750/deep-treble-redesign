import fs from 'fs'

const angularLoader = {
	preloaders: {
			test: /\.ts$/,
			loader: 'tslint'
		},
	loaders: [{
			test: /\.ts$/,
			exclude: /node_modules/,
			loader: 'ts'
		},
		{
      	 	test: /\.js$/,
      	 	exclude: /node_modules/,
			loader: 'babel'
		}]
}
const defaultLoader = {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
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
    angularConfig: {
        entry: './src/js/angular2/index.ts',
		resolve: {
			extensions: ['', '.ts', '.js']
		},
		devtool: 'source-map',
        output: {
            filename: 'app.bundle.js'
        },
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
