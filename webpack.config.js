const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    type
} = require('os');

// 获取绝对路径
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    mode: 'development',
    // webpack 入口文件
    entry: {
        index: './src/pages/index/index.js',
        destination: './src/pages/destination/index.js',
        personal: './src/pages/personal/index.js',
        details: './src/pages/details/index.js',
    },
    // webpack 输出目录
    output: {
        // 输出的目录
        path: resolve('dist'),
        // 输出的文件名
        filename: 'js/[name].js',
        // assetModuleFilename: 'images/[name][ext][query]'
    },

    devServer: {
        open: {
          app: {
            name: 'chrome',
          },
        },
      },

    // sourse-map, 调试用，出错时，将直接定位到原始代码，而不是转换后的代码
    devtool: 'eval-cheap-module-source-map',

    resolve: {
        // 自动补全（可以省略）的扩展名
        extensions: ['.js'],
        // 路径别名
        alias: {
            api: resolve('src/api'),
            fonts: resolve('src/assets/fonts'),
            icons: resolve('src/assets/icons'),
            images: resolve('src/assets/images'),
            styles: resolve('src/assets/styles'),
            components: resolve('src/components'),
            pages: resolve('src/pages'),
            utils: resolve('src/utils')
        },
        // 当启用此选项时，webpack 更倾向于将模块请求解析为相对请求，而不使用来自 node_modules 目录下的模块
        // 解决Can't resolve '..\..\..\node_modules\art-template\lib\runtime.js' in ...
        preferRelative: true,
    },

    plugins: [
        // 自动将依赖注入html模板，并输出最终的html文件到目标文件夹
        new HtmlWebpackPlugin({
            template: './src/pages/index/index.art',
            filename: 'index.html',
            // chunks 选项的作用主要是针对多入口(entry)文件。当你有多个入口文件的时候，对应就会生成多个编译后的 js 文件
            // 那么 chunks 选项就可以决定是否都使用这些生成的 js 文件
            chunks: ['index']
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/destination/destination.art',
            filename: 'destination.html',
            chunks: ['destination']
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/personal/personal.art',
            filename: 'personal.html',
            chunks: ['personal']
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/details/details.art',
            filename: 'details.html',
            chunks: ['details']
        }),

    ],

    module: {
        rules: [
            // css
            {
                test: /\.css$/,
                // loader: 'css-loader'
                use: ['style-loader', 'css-loader']
            },
            // 模板文件
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            },
            // 图片
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                // loader: 'url-loader',
                // options: {
                //     // 小于10k的图片转成base64编码的dataURL字符串写到代码中
                //     limit: 10000,
                //     // 其他的图片转移到
                //     name: 'images/[name].[ext]',
                //     esModule: false
                // },
                // 当在 webpack 5 中使用旧的 assets loader
                // （如 file-loader/url-loader/raw-loader 等）和 asset 模块时，
                // 你可能想停止当前 asset 模块的处理，并再次启动处理，这可能会导致 asset 重复，
                // 你可以通过将 asset 模块的类型设置为 'javascript/auto' 来解决
                // type: 'javascript/auto'
                type: 'asset',
                // type: 'asset/inline',
                generator: {
                    filename: 'images/[name][ext][query]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 10000
                    }
                }
            },
            // 字体文件
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                // loader: 'url-loader',
                // options: {
                //     limit: 10000,
                //     name: 'fonts/[name].[ext]'
                // },
                // type: 'javascript/auto'

                type: 'asset',
                generator: {
                    filename: 'fonts/[name][ext][query]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 10000
                    }
                }
            }
        ]
    }
}