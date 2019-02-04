// make a sort by the desired field in one line

var users = [{
  name: "John",
  surname: 'Jones',
  age: 20
}, {
  name: "Oleg",
  surname: 'Golovlov',
  age: 25
}, {
  name: "Oksana",
  surname: 'Rubic',
  age: 18
}];

users.sort(byField('name'));
users.forEach(function(user) {
  console.log( user.name );
});

users.sort(byField('age'));
users.forEach(function(user) {
  console.log( user.name );
});


function byField (field){

  return function (a, b){
    return a[field] > b[field] ? 1 : -1
  }
}
