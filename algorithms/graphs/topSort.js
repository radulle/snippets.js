/**
 * Topological sort.
 * @param {Map<any, any[]>} nodes
 * @returns {any[]}
 */
module.exports = function topSort(nodes) {
  const visited = new Map()
  const sorted = []

  function dfs(start) {
    if (visited.has(start)) return
    visited.set(start, true)
    for (const node of nodes.get(start)) {
      dfs(node)
    }
    sorted.push(start)
  }

  for (const node of nodes.keys()) {
    dfs(node)
  }

  return sorted.reverse()
}
