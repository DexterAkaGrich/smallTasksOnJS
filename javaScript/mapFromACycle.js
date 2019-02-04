//Given the following code example that needs to be rewritten via the MapS method
// var arr = ["Есть", "жизнь", "на", "Марсе"];
//
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }
//
// alert( arrLength ); // 4,5,2,5


//Solution
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function (arr){
  return arr.length
})

//alert( arrLength )
//Similar code looks much simpler and clearer for the reader
