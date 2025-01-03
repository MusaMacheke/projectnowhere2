import "node_modules/bootstrap/dist/css/bootstrap.min.css";

module.exports = {
    resolve:{
        fallback:{
            process:require.resolve('process/browser')
        },
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },
};