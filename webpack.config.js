module.exports = {
    resolve:{
        fallback:{
            process:require.resolve('process/browser')
        },
    },
    // module: {
    //     rules: [
    //         {
    //         test: /\.js$/,
    //         enforce: 'pre',
    //         use: ['source-map-loader'],
    //         exclude: [/node_modules\/lightgallery/], // Ignore lightgallery
    //         },
    //     ],
    // },
};