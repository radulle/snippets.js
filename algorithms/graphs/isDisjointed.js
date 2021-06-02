/**
 * If disjointed return groups.
 * @param {Map<any, any[]>} nodes
 * @returns {{isDisjointed: boolean, groups: any[][]}}
 */
module.exports = function isDisjointed(nodes) {
  const visited = new Map()
  let group = 0

  function dfs(start) {
    if (visited.has(start)) return false
    visited.set(start, group)
    for (const node of nodes.get(start)) {
      dfs(node)
    }
  }

  for (const node of nodes.keys()) {
    if (visited.has(node)) continue
    dfs(node)
    group++
  }

  const groups = []
  for (const [n, g] of visited.entries()) {
    groups[g] = [...(groups[g] || []), n]
  }

  return { isDisjointed: groups.length > 1, groups }
}
