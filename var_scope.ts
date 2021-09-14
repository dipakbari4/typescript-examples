var person = "John";  // Declaring a person outside

function setName() {
  var person = "Jane";  // var scope inside setName() function and assigned scoped value
  console.log(`The person inside house is ${person}`);
}

setName();

console.log(`The persion outside house is ${person}`);