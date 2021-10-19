function fib(num) {
  var fib = [1, 1];
  for (var i = fib.length; i < num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[fib.length - 1];
}
console.log(fib(4));