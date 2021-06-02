function fib(n, memo = [0, 1]) {
  if (memo[n] !== undefined) return memo[n]
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

/**
 * Good test of recursion and memoization.
 * Fibonacci 0, 1, 1, 2, 3, 5, 8, 13, 21...
 */
console.info(fib(0) === 0)
console.info(fib(2) === 1)
console.info(fib(7) === 13)
console.info(fib(42) === 267914296)
console.info(fib(72) === 498454011879264)
