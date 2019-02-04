// Often used task to convert an array into an object
var names = ['HTML', 'CSS', 'JavaScript']
var tmp = []

var namesObj = names.reduce(function (previous, current, i){ //ruduce sequentially processes each element of the array and stores the intermediate result
  tmp[i] = current //in tmp[i] write the current element
  return tmp  //return the object with the all data from the array
}, {})

console.log(namesObj)
