const isPalindrome = (input) => {
  if (typeof input !== "string" && typeof input !== "number") return false
  input = input.toString().replace(/\W/g, "").toLowerCase()
  // return input === input.split("").reverse().join("") // pros and cons
  let a = 0,
    b = input.length - 1
  while (a < b) {
    if (input[a] !== input[b]) return false
    a++
    b--
  }
  return true
}

/**
 * Good test of reading requirements (special characters, types, letter case) and basics of JS
 */
console.info(isPalindrome([]) === false)
console.info(isPalindrome() === false)
console.info(isPalindrome(1) === true)
console.info(isPalindrome(22) === true)
console.info(isPalindrome(21.2) === true)
console.info(isPalindrome(21.02) === false)
console.info(isPalindrome("") === true)
console.info(isPalindrome("radulle") === false)
console.info(isPalindrome("Anna") === true)
console.info(isPalindrome("Do geese see God?") === true)
console.info(isPalindrome("Step on no pets!") === true)
console.info(
  isPalindrome(
    "Doc, note: I dissent. A fast never prevents a fatness. I diet on cod."
  ) === true
)
