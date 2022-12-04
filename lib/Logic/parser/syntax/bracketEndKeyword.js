const bracketEndKeyword = (lines) => {
  let format = /(end)/;
  let match = lines.match(format);
  if (!match) return null;

  return {
    exp: ``,
    closeGroup: true,
  };
}

module.exports = bracketEndKeyword