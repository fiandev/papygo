const ElseIfKeyword = (lines) => {
  const format = /(elif)\s?\(?((\s?\w+\s?|(\[.*\]|\.|\{.*\}|\>|\<|\=|\&|\|\||\!)?\s?|\s?\".*\"\s?)+)\s?\)?\s?\:?/
  let match = lines.match(format)
  if (!match) return null

  const [,,logical] = match
  //console.log(match)
  
  return {
    exp: `else if (${ logical })`,
    closeGroup: true,
    openGroup: true
  }
}

module.exports = ElseIfKeyword