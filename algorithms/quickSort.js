function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, compare, low, high) {
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (compare(arr[j], pivot)) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function quickSort(arr, compare = (x, y) => x < y, low = 0, high) {
  high ??= arr.length - 1;
  if (low < high) {
    let pivot = partition(arr, compare, low, high);
    quickSort(arr, compare, low, pivot - 1);
    quickSort(arr, compare, pivot + 1, high);
  }
}

let arr = [10, 7, 8, 9, 1, 5];

quickSort(arr);

console.info(arr);
