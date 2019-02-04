var arr = [1, 2, 3, 4, 5, 6, 7, 10];

alert(filter(arr, function(a) {
  return a % 2 == 0
}));

alert( filter(arr, inBetween(3, 6)) );

alert( filter(arr, inArray([1, 2, 10])) );


function filter (arr, func){
    var resultArr = []

    for(var i = 0; i < arr.length; i++){
      tmp = arr[i]

      if(func(tmp)){
        resultArr.push(tmp)
      }
    }

    return resultArr
}

function inBetween (from, to){
  return function (number){
    return number >= from && number <= to
  }
}

function inArray(arr){
  return function (number){
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == number)
        return number
    }
  }
}
