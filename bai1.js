function arrayRemove(arr, value) {
  return arr.filter((item) => !value.includes(item));
}
var result = arrayRemove([1, 2, 3, 4, 6, 7], [2, 3]);
console.log(result);