const { assert } = require("console")
const isBipartite = require("./isBipartite")

const graph = new Map([
  ["David", ["Lucy", "Jose", "Chris"]],
  ["Lucy", ["David", "Brian", "Emily"]],
  ["Emily", ["Lucy", "Jack"]],
  ["Jose", ["David", "Paul"]],
  ["Paul", ["Jose", "Chris"]],
  ["Chris", ["Paul", "David", "Brian"]],
  ["Brian", ["Lucy", "Chris", "Jack"]],
  ["Jack", ["Brian", "Emily"]],
  ["Nikola", ["Neo", "Anna"]],
  ["Neo", []],
  ["Anna", []],
  ["Eve", []],
])

assert(isBipartite(graph).isBipartite === true)
graph.set("Neo", ["Anna"])
assert(isBipartite(graph).isBipartite === false)
