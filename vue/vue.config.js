const path = require('path');
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
    // baseUrl: '/', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
    outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
    assetsDir: 'public', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
    indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
    pages: {
        //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
        index: {
            //除了 entry 之外都是可选的
            entry: 'src/main.ts', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
            template: 'public/index.html', // 模板来源
            filename: 'index.html', // 在 dist/index.html 的输出
            title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
            chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
        }
    },
    lintOnSave: true, // 是否在保存的时候检查
    productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps
        loaderOptions: {}, // css预设器配置项
        requireModuleExtension: true // 启用 CSS modules for all css / pre-processor files.
    },
    // publicPath:'./', //在打包时添加这段代码，处理静态资源找不到问题
    // runtimeCompiler:true,//在启用vue-router路由时需要配置该带码否则会报错
    devServer: {
        // open: false, //是否自动弹出浏览器页面
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        https: false,
        hotOnly: false,
        proxy: {
            '/api':{
                target:"http://127.0.0.1:7001/",
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        },
    },

    configureWebpack: config => {
        config.externals = {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            axios: 'axios',
            'jquery': '$',
            vuex: 'Vuex'
        };
        const plugins = [];
        if (IS_PROD) {
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: "[path].gz[query]",
                    algorithm: "gzip",
                    test: productionGzipExtensions,
                    threshold: 10240,
                    minRatio: 0.8
                })
            );
        }
        config.plugins = [...config.plugins, ...plugins];
    },
    productionSourceMap: false
};