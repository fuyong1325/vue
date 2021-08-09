const plugins = []

// 自动按需引入Vant
plugins.push([
  'import',
  {
    libraryName: 'vant',
    libraryDirectory: 'es',
    // style: true,
    style: (name) => `${name}/style/less`,
  },
  'vant',
])

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins,
}
