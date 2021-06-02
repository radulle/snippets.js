const { assert } = require("console")
const isDisjointed = require("./isDisjointed")

const a = ["A"],
  b = { B: 2 }
const graph = new Map([
  [a, [b, "C"]],
  [b, ["D"]],
  ["C", []],
  ["D", ["F"]],
  ["E", ["F", "C"]],
  ["F", []],
])

assert(isDisjointed(graph).isDisjointed === true)
