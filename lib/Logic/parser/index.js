const functionKeyword = require("#syntax/functionKeyword")
const bracketEndKeyword = require("#syntax/bracketEndKeyword")
const callVariabel = require("#syntax/callVariabel")
const printKeyword = require("#syntax/printKeyword")
const variabelAssign = require("#syntax/variabelAssign")
const ReAssignVariabel = require("#syntax/ReAssignVariabel")
const ifKeyword = require("#syntax/ifKeyword")
const ElseIfKeyword = require("#syntax/ElseIfKeyword")
const ElseKeyword = require("#syntax/ElseKeyword")
const ForKeyword = require("#syntax/ForKeyword")

/* transform value */
const DataTypeBoolean = require("#transform/DataTypeBoolean")
const DataTypeObject = require("#transform/DataTypeObject")

const transforms = [
  DataTypeBoolean,
  DataTypeObject
]

const parser = [
  bracketEndKeyword,
  ForKeyword,
  ElseKeyword,
  ElseIfKeyword,
  ifKeyword,
  printKeyword,
  variabelAssign,
  ReAssignVariabel,
  functionKeyword,
  callVariabel,
  
]
  
module.exports = {
  parser,
  transforms
}