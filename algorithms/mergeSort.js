function mergeSort(list, compare = (x, y) => x < y) {
    if (list.length <= 1) return list;
    const [left, right] = splitList(list);
    return joinLists(mergeSort(left, compare), mergeSort(right, compare), compare);
  }
  
  function splitList(list) {
    const index = Math.floor(list.length / 2);
    return [list.slice(0, index), list.slice(index)];
  }
  
  function joinLists(list1, list2, compare) {
    const result = [];
    let i1 = 0,
      i2 = 0;
  
    while (true) {
      if (compare(list1[i1], list2[i2])) {
        result.push(list1[i1]);
        i1++;
      } else {
        result.push(list2[i2]);
        i2++;
      }
      if (i1 === list1.length) {
        return result.concat(...list2.slice(i2));
      }
      if (i2 === list2.length) {
        return result.concat(...list1.slice(i1));
      }
    }
  }
  
  console.log(mergeSort([34, -2, 0, -1]));
  