module.exports = {
    entry: {
        index: './src/js/index.js',
        about: './src/js/about.js'
    },
    output: {
        filename: 'js/[name]/[name].js',
        chunkFilename: 'js/[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendor',
            filename: "js/[name].js"
        }
    }
}