/**
 * If bipartite return groups.
 * @param {Map} nodes
 * @returns {{isBipartite: boolean, isDisjointed: boolean, groups: any[][]}}
 */
module.exports = function isBipartite(nodes) {
  const visited = new Map()
  let group = 0

  function color(start) {
    for (const node of nodes.get(start)) {
      if (!visited.has(node)) {
        const { group, side } = visited.get(start)
        visited.set(node, { group, side: side === 0 ? 1 : 0 })
        if (color(node) === false) return false
      } else if (visited.get(node).side === visited.get(start).side)
        return false
    }
  }

  for (const node of nodes.keys()) {
    if (!visited.has(node)) {
      visited.set(node, { group, side: 0 })
      group++
    }
    if (color(node) === false) return { isBipartite: false }
  }

  const groups = []
  for (const [n, { group, side }] of visited.entries()) {
    if (!groups[group]) groups[group] = []
    groups[group][side] = [...(groups[group][side] || []), n]
  }

  return { isBipartite: true, isDisjointed: group > 1, groups }
}
