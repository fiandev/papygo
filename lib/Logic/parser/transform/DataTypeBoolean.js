const DataTypeBoolean = (line) => {
  const formats = [
    {
      regex: /(true|yes)/g,
      exp: "true"
    },
    {
      regex: /(false|no|null|undefined)/g,
      exp: "false"
    }
  ]
  
  let exp
  
  for (let format of formats) {
    match = line.match(format.regex)
    if (match) {
      let [, syntax] = match
      exp = line.replace(format.regex, format.exp)
      console.log(exp)
      break
    }
  }
  
  if (!match) return null
  return {
    exp: exp
  }
}

module.exports = DataTypeBoolean