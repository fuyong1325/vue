const fs = require('fs')

const pkg = require('../package.json')

let CustomPlugin = function (options) {
  this.options = options || {}
}

CustomPlugin.prototype.apply = function (compiler) {
  compiler.hooks.done.tap('VersionPlugin', () => {
    fs.writeFile(
      `./dist/v${pkg.version}.txt`,
      `项目包名：${pkg.name}
        项目描述：${pkg.description}
        当前版本：${pkg.version}
        构建日期：${new Date().toLocaleString()}`,
      function (err) {
        if (err) {
          return console.log(err)
        }
        console.log(`v${pkg.version} 打包完毕！`)
      },
    )
  })
}

module.exports = CustomPlugin
