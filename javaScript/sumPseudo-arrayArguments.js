// I need to write the function sum (...), which returns the sum of all its arguments:
function sum (){
  var totalSum = 0 //"var totalSum" - it will not work

  for(var i = 0; i < arguments.length; i++){
    totalSum += arguments[i]
  }
  alert(totalSum)
  return totalSum
}

sum()     //Must withdraw 0
sum(1)    //Must withdraw 1
sum(1, 2) //Must withdraw 3
//... etc
