//I need to write a sum function that works like this: sum (a) (b) = a + b.

console.log(sum(1)(2))
console.log(sum(5)(5)) //For the second brackets in the call to work, the first must return a function.

function sum(a){
  return function secondSum(b){
    return a + b
  }
}
