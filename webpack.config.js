var path = require('path');

module.exports = {
    // 入口
    entry: {
        script: './src/main'
    },
    // 输出
    output: {
        path: ('./build'),
        filename: 'build.js',
        publicPath: '/build/'
    },
    module: {
        // 加载器
        loaders: [
            { test: /\.vue$/,loader: 'vue' },
            // 使用Babel转换ES6，排除node_modules目录下的js
            { test: /\.js$/, loader: 'babel', exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\// },
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.less/, loader: 'style-loader!css-loader!less-loader'},
            { test: /\.styl$/, loader: "style!css!stylus" },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js','.vue','.scss']
        // 别名
/*        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }*/
    },
    devtool: '#source-map'
};
