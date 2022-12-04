const ReAssignVariabel = (lines) => {
  const format = /(\w)\s?\=\s?((\s?|\S)*)/
  let match = lines.match(format)
  if (!match) return null
  const [,name, values] = match
  
  return {
    exp: `${ name } = ${ values }`
  }
}

module.exports = ReAssignVariabel