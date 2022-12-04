const ElseKeyword = (lines) => {
  const format = /(else)\s?\:?/
  let match = lines.match(format)
  if (!match) return null
  //console.log(match)
  
  return {
    exp: `else`,
    closeGroup: true,
    openGroup: true
  }
}

module.exports = ElseKeyword