//In some programming languages, there is an object "string buffer" that accumulates values within itself.
//Its functionality consists of two possibilities:

//Add value to buffer.
//Get current content.

//Add method clear

var buffer = makeBuffer()
buffer('qwe')
buffer('rty')

var secondBuffer = makeBuffer()
secondBuffer(1)
secondBuffer(2)
secondBuffer.clear()
secondBuffer(3)

console.log( buffer() )
console.log( secondBuffer() )


function makeBuffer (){
  var buffer = ''

  function writeToBuffer(value){
    if(!arguments.length) return buffer

    buffer += value
  }

  writeToBuffer.clear = function (){
    buffer = ''
  }

  return writeToBuffer
}
