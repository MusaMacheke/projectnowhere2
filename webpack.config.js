import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";

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