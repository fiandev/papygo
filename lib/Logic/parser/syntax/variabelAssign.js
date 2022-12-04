const variabelAssign = (lines) => {
  const format = /(var|const)\s(\w+)\s?(\:?\=)\s?((\S+\s?)+)/
  let match = lines.match(format)
  
  if (!match) return null
  const [, prefix, name, assign, values] = match
  if (!assign) {
    return {
      exp: `${ prefix === "var" ? "let" : "const" } ${ name };`
    }
  }
  
  return {
    exp: `${ prefix === "var" ? "let" : "const" } ${ name } = ${ values };`
  }
  
}

module.exports = variabelAssign