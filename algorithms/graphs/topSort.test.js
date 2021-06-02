const { assert } = require("console")
const topSort = require("./topSort")

const a = [1],
  b = 2
const dagGraph = new Map([
  [a, [b, "C"]],
  [b, ["D"]],
  ["C", []],
  ["E", ["F", "C"]],
  ["D", ["F"]],
  ["F", []],
])

assert(topSort(dagGraph)[0] === "E")
