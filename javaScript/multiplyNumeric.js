// The task of finding and multiplying numbers in the object
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu, 5)
alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );


function multiplyNumeric(obj, num){   //Function Declaration visible from anywhere in the code
  for(var key in obj){
    (isNumeric(obj[key])) ? obj[key] *= num : ''
  }
}

function isNumeric(n) { // Function to check whether the entered parameter is a number
  return !isNaN(parseFloat(n)) && isFinite(n)
}
