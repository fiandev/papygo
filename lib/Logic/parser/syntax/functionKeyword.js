const functionKeyword = (lines) => {
  const format = /(func)\s?(\w+)\s?\(((\S|\s)+)\)\:/
  let match = lines.match(format)
  if (!match) return null
  
  let [,,funcName, paramNames] = match
  
  const params = paramNames?.trim().split(/\,/) ?? [];
  const paramsStringified = params
    .reduce(
      (p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`),
      ""
    )
    .trim();
  return {
    exp: `function ${funcName}(${paramsStringified})`,
    openGroup: true
  };
  
}

module.exports = functionKeyword