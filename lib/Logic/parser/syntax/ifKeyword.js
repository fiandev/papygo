const ifKeyword = (lines) => {
  const format = /(if)\s?\(\s?((\S|\s)+)\s?\)\s?\:?/
  let match = lines.match(format)
  if (!match) return null

  const [,,logical] = match
  
  return {
    exp: `if(${ logical })`,
    openGroup: true
  }
}

module.exports = ifKeyword