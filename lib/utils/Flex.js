const Logic = require("../Logic");

class Flex {
  syntax = ""
  constructor (text) {
    this.syntax = text
  }
  
  run () {
    const lines = this.syntax.split("\n");
    const result = new Logic(lines);
    
    return result;
  }
  
  
}
module.exports = Flex;