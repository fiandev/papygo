const DataTypeObject = (line) => {
  const format = {
      regex: /(Object|{})/g,
      exp: "Object"
    }
  
  const match = line.match(format.regex)
  if (!match) return null
  
  let [, syntax] = match
  let exp = line.replace(format.regex, format.exp)
  
  return {
    exp: exp
  }
}

module.exports = DataTypeObject