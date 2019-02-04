// The Task
//The input is an array of numbers, for example: arr = [1,2,3,4,5].
//Write the getSums (arr) function, which returns an array of its partial sums.
//In other words, a call to getSums (arr) must return a new array
//of the same number of elements, in which at each position there must be a sum
// of elements arr up to this position inclusive.
//i.e.
//for arr = [ 1, 2, 3, 4, 5 ]
//getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]


//alert(getSums([1,2,3,4,5]));

function getSums (arr){
  var result = []
  if(!arr.length) return result

  var totalSum = arr.reduce(function (previous, current){
    result.push(previous)
    return previous + current
  })
  result.push(totalSum) //without this line the last element of the work reduce will not be displayed
  return result
}
