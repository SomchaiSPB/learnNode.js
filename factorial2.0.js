
const fs = require('fs')

let file = 'factorial.txt'
var num = fs.readFileSync(file, 'utf-8')
function factorial(num) {
    if (num <= 1) return num
    return num * factorial(num - 1)
}
console.log(factorial(num))

// module.exports = factorial;