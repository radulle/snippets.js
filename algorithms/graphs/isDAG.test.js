const { assert } = require("console")
const isDAG = require("./isDAG")

const a = {},
  b = {}
const dagGraph = new Map([
  [a, [b, "C"]],
  [b, ["D"]],
  ["C", []],
  ["D", ["F"]],
  ["E", ["F", "C"]],
  ["F", []],
])

assert(isDAG(dagGraph) === true)

dagGraph.set(a, [a])
assert(isDAG(dagGraph) === false)
