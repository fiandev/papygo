const ForKeyword = (lines) => {
  const format = /(for)\s?(\(\s?(\w)\s(in)\s(range)\(\s?(\w+)\s?\)+)\:?/
  
  let match = lines.match(format)
  if (!match) return null
  
  const [,prefix,, variabel, operate, func, iteration] = match

  return {
    exp: `for (let ${ variabel } = 1; ${ variabel } <= ${ iteration }; ${ variabel }++)`,
    openGroup: true
  }
}

module.exports = ForKeyword