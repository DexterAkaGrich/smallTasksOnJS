// Working with pseudo-array arguments
//How does the function distinguish the missing argument from undefined?

function check (){
  console.log(arguments.length ? "At least one parameter was passed." : "Parameters not passed")
}

check(undefined)
check()
