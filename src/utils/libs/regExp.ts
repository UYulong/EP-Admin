/* 正则表达式 */

// 身份证：支持1代 和 2代
const regExpIdCard = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/

// 中文姓名：2-16位
const regExpName = /^(?:[\u4e00-\u9fa5·]{2,6})$/

export {
  regExpIdCard,
  regExpName
}
