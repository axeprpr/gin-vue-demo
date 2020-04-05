module.exports = {
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    runtimeCompiler: true, // 运行时版本是否需要编译
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译    
}