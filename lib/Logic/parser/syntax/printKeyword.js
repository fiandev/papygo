const printKeyword = (lines) => {
  const format = /(print)\s?(\((((\S+|\s)*)\)))/
  let match = lines.match(format)
  if (!match) return null
  
  let [,,,,argValues] = match
  
  let paramFormat = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|[^\s]+/g;
  /* let params = argValues.replace(/(\,)+/g, "").trim().match(paramFormat)
    .map(v => v.replace(/\,/, ""))
    */
  let params = argValues.split(",")
  
  return {
    exp: `console.log(${params.join()});`
  };
}

module.exports = printKeyword