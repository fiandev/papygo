const callVariabel = (lines) => {
  const format = /(\w+)\s?(\((((\w+|\".*\")(\,\s?)?)*)\))?/
  let match = lines.match(format);
  if (!match) return null
  
  let [,varName,, argValues] = match
  
  if (!argValues) {
    return {
      exp: `${varName}`
    }
  }
  
  let paramFormat = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|[^\s]+/g;
  let params = argValues.replace(/(\,)+/g, "").trim().match(paramFormat)
    .map(v => v.replace(/\,/, ""))
  
  return {
    exp: `${varName}(${params.join()});`
  };
}

module.exports = callVariabel