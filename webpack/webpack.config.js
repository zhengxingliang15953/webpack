const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin');
const webpack=require('webpack');
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HappyPack=require('happypack');
const os=require('os');
const happyThreadPool=HappyPack.ThreadPool({size:os.cpus().length});
const ParallelUglifyPlugin=require('webpack-parallel-uglify-plugin');//多进程压缩代码



module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: 'js/[name].[hash].js',
        path: resolve(__dirname, 'dist'),
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.css$/, exclude:/node_modules/,use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test:/\.less$/,exclude:/node_modules/,use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']
            },
            {
                test:/\.js$/,exclude:/node_modules/,loader:'happypack/loader?id=babel'//happypack/loader?id=babel
            },
            {
                test:/\.(png|jpg|jpeg|gif|ico)$/,loader:'url-loader',options:{
                    limit:8*1024,
                    esModule:false,
                    name:'[name].[ext]',
                    outputPath:'img'
                }
            },
            {
                test:/\.html$/,loader:'html-loader'
            },
            {
                test:/\.vue$/,use:'vue-loader',exclude:/node_modules/
            },
            {
                exclude:/.(js|css|less|html|vue|jpg|png|jpeg|gif|)$/,loader:'file-loader',options:{
                    name:'[name].[ext]',
                    outputPath:'other'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            minify: {
                collapseInlineTagWhite: true,
                removeComents: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyjsWebpackPlugin({
            // cache:true,//开启js代码缓存
        }),
        new VueLoaderPlugin(),
        new HappyPack({
            id:'babel',
            loaders:['babel-loader?cacheDirectory=true'],
        }),
        new ParallelUglifyPlugin({
            uglifyJs:{
                output: {
                    beautify: false,
                    comments: false
                  },
                compress:{
                    warnings:false
                },
                socuceMap:true
            }
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        })
    ],
    devServer:{
        contentBase:resolve(__dirname,'dist'),
        compress:true,
        port:3000,
        hot:true,
        open:true,
       /*  proxy:{
            '/':{
                target:"http://localhost:8000",
                changeOrigin:true,
                // pathRewrite: {'^/api': '/'} 
            }
        } */
    },
    devtool:'cheap-module-eval-source-map',
    resolve:{
        extensions:['.vue','.js','json']
    },
    optimization:{
        splitChunks:{
            chunks:'all',
            minSize:30000,//超过20k才会进行单独打包
            minChunks:1,//使用过一次就会打包
            maxAsyncRequests:10,//最大打包数
            maxInitialRequests:3,//入口文件超过三个，只会对前三个打包
            automaticNameDelimiter:'~',
            name:true,
            maxSize:60000,
            cacheGroups:{
                vendors:{
                    test:/[\\/]node_modules[\\/]/,
                    priority:-10,
                    // filename:'js/vendor.js',
                    reuseExistingChunk:true,
                },
                common:{
                    priority:-20,
                    reuseExistingChunk:true,
                    // filename:'js/common.js'
                }
            }
        }
    }
}