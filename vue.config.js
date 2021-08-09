const path = require('path')
const webpack = require('webpack')
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const GitRevision = new GitRevisionPlugin()
const buildDate = JSON.stringify(new Date().toLocaleString())
const VersionPlugin = require('./build/version-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

function getGitHash() {
  try {
    return GitRevision.version()
  } catch (e) {}
  return 'unknown'
}

// 生产环境使用第三方CDN加载框架
// const isProd = process.env.NODE_ENV === 'production'
// const assetsCDN = {
//   externals: {
//     vue: 'Vue',
//     'vue-router': 'VueRouter',
//     vuex: 'Vuex',
//     axios: 'axios',
//   },
//   css: [],
//   // https://unpkg.com/browse/vue@2.6.10/
//   js: [
//     '//cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js',
//     '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
//     '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
//     '//cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js',
//   ],
// }

const vueConfig = {
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.DefinePlugin({
        APP_VERSION: `"${require('./package.json').version}"`,
        GIT_HASH: JSON.stringify(getGitHash()),
        BUILD_DATE: buildDate,
      }),
    ],
    // 生产环境使用第三方CDN加载框架
    // externals: isProd ? assetsCDN.externals : {},
  },

  chainWebpack: (config) => {
    config.resolve.alias.set('@$', resolve('src'))

    // 生产环境使用第三方CDN加载框架
    // if (isProd) {
    //   config.plugin('html').tap((args) => {
    //     args[0].cdn = assetsCDN
    //     return args
    //   })
    // }

    config.output.filename('js/[name].[hash:8].js').chunkFilename('js/[name].[hash:8].js')
      .end()

    // 覆写v-html指令解决潜在XSS攻击
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions.directives = {
          html(node, directiveMeta) {
            (node.props || (node.props = [])).push({
              name: 'innerHTML',
              value: `xss(_s(${directiveMeta.value}))`,
            })
          },
        }
        return options
      })
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "~@/styles/theme.less";`,
        },
      },
    },
  },

  devServer: {
    open: false,
    port: 8114,
    // 如果要打开代理，请移除mockjs（/src/main.js）
    proxy: {
      '/api': {
        target:
          process.env.VUE_APP_PROXY_TARGET_PROTOCOL
          + process.env.VUE_APP_PROXY_TARGET_HOSTNAME
          + process.env.VUE_APP_PROXY_TARGET_PORT_API,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },

  productionSourceMap: false,
  lintOnSave: undefined,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: [],

  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'less',
  //     patterns: [resolve(__dirname, './src/styles/*.less')],
  //   },
  // },
}

// 生成版本标识文件
if (process.env.NODE_ENV === 'production') {
  vueConfig.configureWebpack.plugins.push(new VersionPlugin())
}

module.exports = vueConfig
