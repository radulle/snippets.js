/**
 * Is it a directed acyclic graph?
 * @param {Map} nodes
 * @returns {boolean}
 */
module.exports = function isDAG(nodes) {
  function dfs(start, visited = new Map()) {
    if (visited.has(start)) return false
    visited.set(start, true)
    for (const node of nodes.get(start)) {
      if (!dfs(node, visited)) return false
    }
    return true
  }

  for (const node of nodes.keys()) {
    if (!dfs(node)) return false
  }

  return true
}
