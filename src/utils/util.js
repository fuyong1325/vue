// 解析文本域数据为HTML
export function textarea2html(str) {
  if (str) {
    return str
      .replaceAll(' ', '&nbsp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll("'", '&#039;')
      .replaceAll('"', '&quot;')
      .replaceAll('↵', '<br />')
      .replaceAll('\n', '<br />')
      .replaceAll('\r', '<br />')
  }
}
