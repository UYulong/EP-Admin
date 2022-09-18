module.exports = {
  // printWidth: 80, // 一行代码的最大字符数，默认是80
  tabWidth: 2, // tab宽度为2空格
  // useTabs: false, // 是否使用tab来缩进
  semi: false, // 未尾分号, default:  true
  singleQuote: true, // 使用单引号 default: false
  quoteProps: 'as-needed', // object对象中key值是否加引号 "<as-needed|consistent|preserve>"）as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号
  // jsxSingleQuote: false, // 在jsx文件中的引号需要单独设置
  trailingComma: 'none', // 未尾分号 default: es5    all | none | es5
  bracketSpacing: true, // object对象里面的key和value值和括号间的空格
  // bracketSameLine: false,
  // jsxBracketSameLine: false,
  arrowParens: 'avoid', // default: always
  // insertPragma: false,
  // requirePragma: false,
  proseWrap: 'never',
  // htmlWhitespaceSensitivity: 'css',
  // vueIndentScriptAndStyle: true,  // .vue 文件缩进
  endOfLine: 'auto' // default lf
}
