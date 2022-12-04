const fs = require("fs")
const runtime = require("vm")
const chalk = require("chalk")
const { Flex } = require("../utils");

class Interpreter {
  fileContent = ""
  filename = global.file.name
  
  constructor(fileContent) {
    this.fileContent = this.flexing(fileContent)
  }
  
  parse(contents) {
    const minified = false;
    let result = "";
    
    let isOpenGroup = false;
    for (const syntax of contents) {
      let tempRes = syntax.exp
      if (syntax.closeGroup) {
        tempRes = "} " + tempRes;
        isOpenGroup = false;
      }
      if (syntax.openGroup) {
        tempRes = tempRes + " {";
        isOpenGroup = true;
      }
      result += minified ? tempRes : tempRes + "\n";
    }
    if (isOpenGroup) {
      result += " }";
    }
  
    return result
  }
  
  flexing (text) {
    const flexer = new Flex(text)
    
    return flexer.run()
  }
  
  execute () {
    let syntax = this.parse(this.fileContent)
    
    try {
      fs.writeFileSync(`./__test__/cache/${ this.filename }.js`, syntax)
      const script = new runtime.Script(syntax)
      
      // run the script
      console.time()
      runtime.runInThisContext(syntax, {
          lineOffset: 0,
          displayErrors: true,
      });
      console.timeEnd()
      
    } catch (e) {
      let numLine = e.stack.split('evalmachine.<anonymous>:')[1]?.substring(0, 1)
      console.log(
        chalk.hex("#ed1010").bold(`Error: ${ e.message } at ${ global.file.base }:${ numLine }`)
      )
    }
  }

}

module.exports = Interpreter