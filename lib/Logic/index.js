const runtime = require("vm")
const chalk = require("chalk")
const path = require("path")
const { parser, transforms } = require("./parser")

class Logic {
  constructor (lines) {
    this.lines = lines
    
    return lines
    .map((line, i) => {
      let syntax = null
      let numLine = i + 1
      
      for (const transfrom of transforms) {
        syntax = transfrom(line);
        if (syntax) break
      }
      
      for (const parse of parser) {
        syntax = parse(line);
        if (syntax) break
      }
      
      // if not parsed write this line
      if (!syntax) {
        // if null line
        if (line == "") {
          syntax = {
            exp: line
          }
        }
      }
      
      // error occurred when not parsed
      if (!syntax) {
        this.error(line, numLine)
      }
      
      return syntax;
    })
    .filter((v) => !!v);
  }
  
  error(line, numLine) {
    let line_error = chalk.hex("#ff5959").bold(` >> |${ numLine }| ${ line.replace(/\s/, "") }`)
    let file = chalk.hex("#ffe93b").bold(`file : ${ global.file.dir }/${ global.file.base }:${ numLine }`)
    let pathfile = chalk.hex("#4ae851").bold(`path : ${ path.resolve(global.file.dir) }/${ global.file.base }`)
    
    console.error(`${ chalk.hex("#00ccff").bold("Parse Error!") }\n${line_error} \n${file}\n${ pathfile }`)
    process.exit(1)
  }
}

module.exports = Logic