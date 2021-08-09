/**
 * 作者：fuyong
 * 参考：http://eslint.org/docs/user-guide/configuring
 * 配置原则：
 * 1、能够帮助发现代码错误的规则，全部开启
 * 2、配置不应该依赖于某个具体项目，而应尽可能的合理
 * 3、帮助保持团队的代码风格统一，而不是限制开发体验
 * 4、每一条配置都有注释说明此配置的用途
 */

module.exports = {
  root: true,
  // parser: "babel-eslint",
  // parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    ecmaFeatures: {
      impliedStrict: true,
    },
    sourceType: 'module',
  },
  env: {
    // amd: true,
    browser: true,
    commonjs: true,
    // jquery: true,
    node: true,
  },
  globals: {
    'APP_VERSION': 'readonly',
  },
  // required to lint *.vue files
  // plugins: ['html', 'prettier'],
  // plugins: ['html'],
  plugins: ['vue'],
  settings: {
    'html/html-extensions': ['.html'], // consider .html and .we files as HTML
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // extends: "standard",
  // extends: ["plugin:vue/essential", "@vue/prettier"],
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  // add your custom rules here
  rules: {
    // 'prettier/prettier': 2,

    /**
     * Possible Errors
     * 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：
     */
    // 禁止 for 循环出现方向错误
    'for-direction': 2,
    // 禁止将 await 写在循环里
    'no-await-in-loop': 0,
    // 禁用 console
    'no-console': 0,
    // 禁止使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 只在生产环境禁用
    // 禁止冗余的括号
    'no-extra-parens': 2,
    // 禁止在普通字符串中出现模版字符串的变量形式
    'no-template-curly-in-string': 2,

    /**
     * Best Practices
     * 这些规则是关于最佳实践的，帮助你避免一些问题：
     */
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 2,
    // 强制数组方法除了 forEach 之外的回调函数中有 return 语句
    'array-callback-return': 2,
    // 把 var 语句看作是在块级作用域范围之内，禁止在块外使用
    'block-scoped-var': 2,
    // 限制程序中最大环路复杂度
    complexity: [
      2,
      {
        max: 30, // 不能超过 30（默认：20）
      },
    ],
    // 要求遵循大括号约定
    // curly: [
    //   2,
    //   'multi-line', // if、else、for、while 或 do 后面必须要有 {，除非是单行
    //   'consistent' // 强制 if、else if 和 else 中所有的代码块使用或者不使用大括号
    // ],
    // 要求 switch 语句中必须有 default 分支。或者也可以在最后一个 case 分支下，使用 // no default （不区分大小写）来表明此处不需要 default 分支。
    'default-case': 2,
    // 链式调用的时候，强制在点号之前和之后一致的换行
    'dot-location': [
      2,
      'property', // 强制在点号之前换行而不是之后（点号必须放在第二行开头处，禁止放在第一行结尾处）
    ],
    // 要求使用点号（禁止出现 foo["bar"]，必须写成 foo.bar）
    // "dot-notation": 1,
    // 必须使用 === 或 !==，禁止使用 == 或 !=
    eqeqeq: [
      2,
      'smart', // 以下情况除外：比较两个字面量的值、比较 typeof 的值、与 null 进行比较
    ],
    // 需要约束 for-in （内部必须有 hasOwnProperty）
    'guard-for-in': 0,
    // 禁用 alert、confirm 和 prompt
    'no-alert': 1,
    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': 2,
    // 禁止空块语句
    'no-empty': [
      2,
      {
        allowEmptyCatch: true, // 允许空的catch子句
      },
    ],
    // 禁止出现空函数
    'no-empty-function': [
      1,
      {
        allow: ['arrowFunctions'], // 允许空的箭头函数
      },
    ],
    // 禁用 eval()
    'no-eval': 2,
    // 禁止扩展原生对象
    'no-extend-native': 2,
    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 1,
    // 禁用不必要的标签
    'no-extra-label': 2,
    // 表示浮点小数时，禁止省略 0
    'no-floating-decimal': 2,
    // 禁止使用短符号进行类型转换
    'no-implicit-coercion': 1,
    // 禁止在全局范围使用变量和函数声明
    'no-implicit-globals': 2,
    // 禁用隐式的 eval()
    'no-implied-eval': 2,
    // 禁止 this 关键字在类或类对象之外出现
    'no-invalid-this': 1,
    // 禁用迭代器 __iterator__
    'no-iterator': 2,
    // 禁用标签语句
    'no-labels': 2,
    // 禁用不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止循环中存在函数
    'no-loop-func': 2,
    // 禁止出现连续的多个空格
    'no-multi-spaces': [
      2,
      {
        // ignoreEOLComments: true, // 行尾注释可用空格对齐
        exceptions: {
          Property: true, // 对象的属性是否可用空格对齐
          BinaryExpression: false, // 二元运算符是否可用空格对齐
          VariableDeclarator: true, // 变量定义是否可用空格对齐
          ImportDeclaration: true, // import 语句是否可用空格对齐
        },
      },
    ],
    // 禁止多行字符串（使用 \ 来换行字符串）
    'no-multi-str': 2,
    // 禁止使用 new 产生副作用（直接 new 一个类而不赋给变量）
    'no-new': 2,
    // 禁用 Function构造函数（new Function）
    'no-new-func': 2,
    // 禁止原始包装实例（使用 new 来生成 String, Number 或 Boolean）
    'no-new-wrappers': 2,
    // 禁止在字符串字面量中使用八进制转义序列
    'no-octal-escape': 2,
    // 禁止对函数参数再赋值（但如果参数是一个对象，可以对它的属性再赋值）
    'no-param-reassign': 2,
    // 禁用__proto__
    'no-proto': 2,
    // 禁止在返回语句中赋值，除非使用括号把它们括起来
    'no-return-assign': 2,
    // 禁止在返回语句里使用 await
    'no-return-await': 2,
    // 禁用 Script URL（location.href = "javascript:void(0)"）
    'no-script-url': 2,
    // 禁止自身比较
    'no-self-compare': 2,
    // 禁止使用逗号操作符
    'no-sequences': 2,
    // 限制可以被抛出的异常（禁止 throw 字面量，必须 throw 一个 Error 对象）
    'no-throw-literal': 2,
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 2,
    // 禁止无用的表达式
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true, // 允许在表达式中使用逻辑短路求值
        allowTernary: true, // 允许在表达式中使用类似逻辑短路求值的三元运算符
        allowTaggedTemplates: true, // 允许在表达式中使用带标签的模板字面量
      },
    ],
    // 禁用不必要的 .call() 和 .apply()
    'no-useless-call': 2,
    // 禁止没有必要的字符拼接
    'no-useless-concat': 2,
    // 禁止使用 void 操作符
    'no-void': 2,
    // 禁用 with 语句
    'no-with': 2,
    // Promise 的 reject 中必须传入 Error 对象，而不是字面量
    'prefer-promise-reject-errors': [
      2,
      {
        allowEmptyReject: true, // 允许调用 reject() 参数为空
      },
    ],
    // parseInt() 要求必须有基数（必须传入第二个参数）
    radix: [
      2,
      'as-needed', // 禁止提供基数 10（十进制时不提供第二个参数）
    ],
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    // "vars-on-top": 1,
    // 需要把立即执行的函数包裹起来，即必须符合如下格式：(function () { alert("Hello") })()
    'wrap-iife': [
      2,
      'inside',
      {
        functionPrototypeMethods: true,
      },
    ],
    // 要求或者禁止 Yoda 条件（条件判断中字面量在先而变量在第二的位置）
    yoda: [
      2,
      'never',
      {
        onlyEquality: true, // 只对等号操作符 == 和 === 报告 Yoda 条件
      },
    ],

    /**
     * Variables
     * 这些规则与变量声明有关：
     */
    // 要求变量声明中的初始化
    'init-declarations': 1,
    // 禁止 catch 的参数名与定义过的变量重复
    'no-catch-shadow': 2,
    // 禁用与变量同名的标签
    'no-label-var': 2,
    // 禁止变量声明覆盖外层作用域的变量
    'no-shadow': 2,
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 2,
    // 不允许初始化变量值为 undefined
    'no-undef-init': 2,
    // 禁止将 undefined 作为标识符
    'no-undefined': 0,
    // 变量必须先定义后使用
    'no-use-before-define': [
      2,
      'nofunc', // 允许引用未提前声明的函数
    ],

    /**
     * Node.js and CommonJS
     * 这些规则是关于 Node.js 或在浏览器中使用 CommonJS 的：
     */
    // 强制 return callback 函数
    // 'callback-return': 1,
    // 强制 callback err 处理
    'handle-callback-err': 1,
    // 禁止直接使用 Buffer 的构造函数
    'no-buffer-constructor': 2,
    // 禁止混合常规变量声明和 require 调用
    'no-mixed-requires': 1,
    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 2,
    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 2,

    /**
     * Stylistic Issues
     * 这些规则是关于风格指南的，而且是非常主观的：
     */
    // 配置数组的中括号内前后的换行格式
    'array-bracket-newline': [
      2,
      {
        multiline: true,
        // "minItems": 2 // 达到多少个元素必须换行
      },
    ],
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': [
      2,
      'never', // 禁止在方括号内使用空格
    ],
    // 强制在单行代码块中使用一致的空格
    'block-spacing': [
      2,
      'always', // 首尾必须有空格
    ],
    // 强制在代码块中使用一致的大括号风格
    'brace-style': [
      2,
      '1tbs', // 强制 one true brace style
      {
        allowSingleLine: true, // 允许块的开括号和闭括号在同一行
      },
    ],
    // 强制使用驼峰拼写法命名约定（变量必须是 camelcase 风格）
    camelcase: 2,
    // 禁止使用拖尾逗号
    'comma-dangle': [
      2,
      'always-multiline', // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
    ],
    // 强制在逗号前后使用一致的空格（逗号前禁止有空格，逗号后必须有空格）
    'comma-spacing': 2,
    // 强制使用一致的逗号风格（要求逗号放在数组元素、对象属性或变量声明之后，且在同一行）
    'comma-style': 2,
    // 强制在计算的属性的方括号中使用一致的空格（首尾禁止有空格）
    'computed-property-spacing': 2,
    // 当获取当前执行环境的上下文时，强制使用一致的命名（this 的别名必须是 that）
    'consistent-this': 1,
    // 要求文件末尾存在空行
    'eol-last': 2,
    // 函数名和执行它的括号之间禁止有空格
    'func-call-spacing': 2,
    // 函数赋值给变量的时候，函数名必须与变量名一致
    'func-name-matching': [
      2,
      'always',
      {
        includeCommonJSModuleExports: false,
      },
    ],
    // 强制使用一致的缩进
    indent: [
      2,
      2, // 两个空格，不要 tab
      {
        SwitchCase: 1, // 强制 switch 语句中的 case 子句的缩进级别
        VariableDeclarator: {
          // 强制变量声明的缩进级别
          var: 2,
          let: 2,
          const: 3,
        },
        MemberExpression: 1, // 强制针对多行属性链的缩进（除了在变量声明和赋值语句中）
        FunctionDeclaration: {
          // 使用一个对象定义函数声明的缩进规则
          parameters: 'first', // 声明中的所有参数必须与第一个参数对齐
        },
        FunctionExpression: {
          // 使用一个对象定义函数表达式的缩进规则
          parameters: 'first', // 表达式中的所有参数必须与第一个参数对齐
        },
        CallExpression: {
          // 使用一个对象定义函数调用表达式的缩进规则
          arguments: 'first', // 表达式中的所有参数必须先与第一个参数对齐
        },
        ArrayExpression: 'first', // 数组中的所有元素必须与第一个元素对齐
        ObjectExpression: 'first', // 对象中的所有属性必须与第一个属性对齐
        ignoredNodes: ['TemplateLiteral'],
      },
    ],
    // 强制在 JSX 属性中使用一致的双引号
    'jsx-quotes': 2,
    // 强制在对象字面量的键和值之间使用一致的空格
    'key-spacing': [
      2,
      {
        mode: 'minimum', // 允许的空格可以超出一个
      },
    ],
    // 强制关键字周围空格的一致性（前后都至少有一个空格）
    'keyword-spacing': 2,
    // 强制注释周围有空行
    'lines-around-comment': [
      2, // 要求在块级注释之前有一空行
      {
        afterLineComment: false, // 禁止在行级注释之后有一空行
        allowBlockStart: true, // 允许注释出现在块语句的开始位置
        allowBlockEnd: false, // 禁止注释出现在块语句的结束位置
        allowObjectStart: true, // 允许注释出现在对象字面量的开始位置
        allowObjectEnd: false, // 禁止注释出现在对象字面量的结束位置
        allowArrayStart: false, // 禁止注释出现在数组字面量的开始位置
        allowArrayEnd: false, // 禁止注释出现在数组字面量的开始位置
      },
    ],
    // 强制块语句的最大可嵌套深度
    'max-depth': [
      2,
      5, // 不超过 5 层（默认：4）
    ],
    // 强制最大行长
    'max-len': [
      2,
      {
        code: 120, // 字符数（默认值：80）
      },
    ],
    // 强制回调函数最大嵌套深度（多了请用 async await 替代）
    'max-nested-callbacks': [
      2,
      5, // 不超过 5 层（默认：10）
    ],
    // 强制函数定义中最大参数个数
    'max-params': [
      2,
      6, // 不超过 6 个（默认：3）
    ],
    // 限制函数块中的语句的最大数量
    'max-statements': [
      2,
      50, // 最大 50 句（默认：10）
      {
        ignoreTopLevelFunctions: true, // 忽略顶级函数
      },
    ],
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': [
      2,
      {
        max: 2, // 最大 2 句（默认：1）
      },
    ],
    // 要求构造函数首字母大写
    'new-cap': 2,
    // 要求调用无参构造函数时带括号
    'new-parens': 2,
    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': [
      2,
      {
        ignoreChainWithDepth: 2, // 允许在同一行成链的深度（默认：2）
      },
    ],
    // 禁止使用 Array 构造函数
    'no-array-constructor': 2,
    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-lonely-if': 2,
    // @fixable 禁止出现超过三行的连续空行
    'no-multiple-empty-lines': [
      2,
      {
        max: 2, // 强制最大连续空行数
        maxEOF: 1, // 强制文件末尾的最大连续空行数
        maxBOF: 0, // 强制文件开始的最大连续空行数
      },
    ],
    // 禁用 Object 的构造函数（用更简洁的 {} 替代）
    'no-new-object': 2,
    // 禁止使用 tabs
    'no-tabs': 2,
    // 禁用行尾空白（包括空行和注释块）
    'no-trailing-spaces': 2,
    // 禁止可以表达为更简单结构的三元操作符
    'no-unneeded-ternary': 2,
    // 禁止属性前有空白
    'no-whitespace-before-property': 2,
    // 强制单行声明的位置（禁止 if 后面不加大括号而写两行代码）
    'nonblock-statement-body-position': [
      2,
      'beside', // 在单行语句之前不允许换行
      {
        overrides: {
          while: 'below', // 如果父级是一个 while 语句，单行语句不能在同一行上
        },
      },
    ],
    // 强制在花括号内使用一致的换行符
    'object-curly-newline': [
      2,
      {
        multiline: true, // 强制在花括号内使用一致的换行符
        consistent: true, // 要求或者两个花括号都或者两者都不附上换行符
      },
    ],
    // 强制在花括号中使用一致的空格
    'object-curly-spacing': [
      2,
      'always', // 要求花括号内有空格（除了 {}）
    ],
    // 强制将对象的属性放在不同的行上
    'object-property-newline': [
      2,
      {
        allowMultiplePropertiesPerLine: true, // 允许所有的 key 和 value 在同一行
      },
    ],
    // 强制函数中的变量要么一起声明要么分开声明
    // 'one-var': [
    //   2,
    //   {
    //     "initialized": "never" // 要求每个作用域的初始化的变量有多个变量声明
    //   }
    // ],
    // 要求或禁止在变量声明周围换行
    'one-var-declaration-per-line': 2, // 默认：强制每个变量初始化语句换行
    // 要求或禁止尽可能地简化赋值操作
    'operator-assignment': 2, // 默认：要求尽可能地简化赋值操作
    // 强制操作符使用一致的换行符风格
    'operator-linebreak': [
      2,
      'before', // 要求把换行符放在操作符前面
    ],
    // 要求对象字面量属性名称使用引号
    // 'quote-props': [
    //   2,
    //   'consistent-as-needed', // 如果有属性名称要求使用引号，则所有的属性名称都要使用引号；否则，禁止所有的属性名称使用引号
    //   {
    //     keywords: true // 如果关键字作为对象属性名称，要求使用引号
    //   }
    // ],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [
      2,
      'single', // 要求尽可能地使用单引号
      {
        avoidEscape: true, // 允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义
        allowTemplateLiterals: true, // 允许字符串使用反勾号
      },
    ],
    // 要求使用 JSDoc 注释
    'require-jsdoc': [
      2,
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
        },
      },
    ],
    // 要求或禁止使用分号代替 ASI
    semi: [
      1,
      'never', // 禁止在语句末尾使用分号（除了消除以 [、(、/、+ 或 - 开始的语句的歧义）
    ],
    // 强制分号前后有空格
    'semi-spacing': 2, // 默认：一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
    // 强制分号的位置
    'semi-style': 2, // 默认：分号必须写在行尾，禁止在行首出现
    // 要求或禁止语句块之前的空格（块语句必须总是至少有一个前置空格）
    'space-before-blocks': 2, // 默认：块语句必须总是至少有一个前置空格
    // 要求或禁止函数圆括号之前有一个空格
    'space-before-function-paren': [
      2,
      {
        anonymous: 'ignore', // 忽略匿名函数表达式
        named: 'never', // 禁止命名的函数表达式
        asyncArrow: 'always', // 要求异步的箭头函数表达式
      },
    ],
    // 禁止或强制圆括号内的空格
    'space-in-parens': 2, // 默认：强制圆括号内没有空格
    // 要求中缀操作符周围有空格
    'space-infix-ops': 2,
    // 要求或禁止在一元操作符之前或之后存在空格
    'space-unary-ops': [
      2,
      {
        words: true, // 单词类一元操作符要求有空格，例如：new、delete、typeof、void、yield
        nonwords: false, // 这些一元操作符禁止有空格: -、+、--、++、!、!!
      },
    ],
    // 要求或禁止在注释前有空白
    'spaced-comment': [
      2,
      'always', // // 或 /* 必须跟随至少一个空白
      {
        block: {
          exceptions: [
            // 这些字符串也就是该规则的例外
            '*',
          ],
          balanced: true, // 指定内联块注释是否应该有对称的空格
        },
      },
    ],
    // 要求或禁止 switch 语句的 case 的冒号前后的空格
    'switch-colon-spacing': 2, // 默认：冒号前禁止有空格，冒号后要求有空格
    // 要求或禁止模版字符串的 tag 之间的空格
    'template-tag-spacing': 2, // 默认：禁止
    // 要求或禁止使用 Unicode 字节顺序标记
    'unicode-bom': 2, // 默认：文件不能以 Unicode BOM 开头

    /**
     * ECMAScript 6
     * 这些规则只与 ES6 有关, 即通常所说的 ES2015：
     */
    // 要求箭头函数体使用大括号
    // 'arrow-body-style': [
    //   2,
    //   'as-needed', // 默认：当大括号是可以省略的，强制不使用它们
    //   {
    //     requireReturnForObjectLiteral: true // 要求使用大括号，并且显示返回对象字面量
    //   }
    // ],
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': [
      2,
      'always', // 默认：始终给参数周围加圆括号
    ],
    // 要求箭头函数的箭头之前或之后有空格
    'arrow-spacing': 2, // 默认：前后都必须有空格
    // 强制 generator 函数中 * 号周围有空格
    'generator-star-spacing': [
      2,
      'after', // （为了和 yield 统一）* 和 function 关键字之间没有空格，* 和函数名之间有空格
    ],
    // 禁止出现难以理解的箭头函数
    'no-confusing-arrow': [
      2,
      {
        allowParens: true, // 当用圆括号括起来时允许
      },
    ],
    // 禁止重复 import 模块
    'no-duplicate-imports': 2,
    // 禁止在对象字面量中使用不必要的计算键名
    'no-useless-computed-key': 2,
    // 禁用不必要的构造函数
    'no-useless-constructor': 2,
    // 禁止导入、导出、解构时出现同样名字的重命名
    'no-useless-rename': 2,
    // 要求使用 let 或 const 而不是 var
    'no-var': 2,
    // 要求对象字面量简写语法
    'object-shorthand': [
      2,
      'always', // 默认：只要有可能，简写就应该被使用
      // 'consistent-as-needed' // 保证对象字面量的简写或非简写一致性，但尽可能的全部使用简写
    ],
    // 要求使用扩展运算符而非 .apply()
    'prefer-spread': 1,
    // 建议使用模板而非字符串连接
    'prefer-template': 1,
    // 强制扩展运算符（...）与表达式之间的空格
    'rest-spread-spacing': 2, // 默认：禁止有空格
    // 创建 Symbol 时必须传入描述参数
    'symbol-description': 2,
    // 强制模板字符串中空格的使用
    'template-curly-spacing': 0, // 默认：禁止花括号内出现空格
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [
      2,
      'after', // 默认：* 和 yield 之间没有空格，* 和参数之间有空格
    ],

    /**
     * 启用 vue/recommended 规则
     * 在 Vue.js 官方推荐风格的基础上覆盖：
     */
    // 允许标签的属性在一行上的个数
    'vue/max-attributes-per-line': [
      1,
      {
        singleline: 5, // 单行标签最大允许 5 个属性
        multiline: {
          max: 1, // 多行标签每一行最大允许 1 个属性
          allowFirstLine: false, // 多行标签不允许在首行写属性
        },
      },
    ],
    'vue/valid-v-else-if': 0, // View UI 的 Col 等元素无法通过此规则，故关闭
    'vue/valid-v-else': 0, // View UI 的 Col 等元素无法通过此规则，故关闭
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false, // View UI 的 Col 等元素无法通过此规则，故关闭
      },
    ],
    // 要求或禁止在标签的右括号之前换行
    'vue/html-closing-bracket-newline': [
      2,
      {
        singleline: 'never', // 默认：单行不换行
        multiline: 'always', // 多行必须换行
      },
    ],
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'any',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 禁止使用v-html防止XSS攻击
    'vue/no-v-html': 0,
    // 要求或禁止在标签的右括号之前的空格
    // 'vue/html-closing-bracket-spacing': [
    //   2,
    //   {
    //     startTag: 'never', // 默认：在开始标签的右括号前不允许空格
    //     endTag: 'never', // 默认：在结束标签的右括号前不允许空格
    //     selfClosingTag: 'always' // 默认：在自关闭标签的右括号前必须空格
    //   }
    // ],
    // 在 <script> 中执行一致的缩进
    // 'vue/script-indent': [
    //   2,
    //   2, // 两个空格，不要 tab
    //   {
    //     baseIndent: 0, // 默认：顶层不缩进
    //     switchCase: 1, // 强制 switch 语句中的 case 子句的缩进级别
    //     // ignores: []
    //   }
    // ]
    // 禁止未使用的变量
    'no-unused-vars': [
      2,
      {
        args: 'none', // 不检查参数
      },
    ],
  },
}
