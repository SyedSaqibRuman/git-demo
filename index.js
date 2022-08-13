//Variables
var myName = "Syed Saqib Ruman";

//we can update the value
let _name = myName
_name = "Tom Cruze"

//We can't update the value
const message = "Hello!!"

//message = "Something" --> Uncaught TypeError: Assignment to constant variable.

console.log(message, _name)


//to display the datatype of a value we use typeof method
console.log(typeof myName) //ingstr
console.log(typeof 123)   //number
console.log(typeof 123.0) //number
console.log(typeof true) //boolean
console.log(typeof ['List2']) //object
let myVariable
console.log(typeof myVariable) //undefined
let selectedOption = null
console.log(typeof selectedOption)
