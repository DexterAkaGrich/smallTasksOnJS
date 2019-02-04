// I have several objects, I need to make a function to combine them into one object.

var men = {
  age: 21,
  name: 'John',
  surname: 'Jones'
};

var user = {
  isAdmin: false,
  isEmailConfirmed: true
};

var student = {
  university: 'My university'
};

copy(men, user, student)
console.log(men) //after executing the function, the object took the parameters of other objects included in the function


function copy(){
  var result = arguments[0] //assign the main object to which we will write the remaining objects

  for(var i = 1; i < arguments.length; i++){
    var tmp = arguments[i] //assign the remaining arguments
    for(key in tmp){
      result[key] = tmp[key] //assign object values
    }
  }
  return result
}
