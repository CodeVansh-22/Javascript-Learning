let age = "20";
console.log(typeof age);
let valueInNumber = Number(age);
console.log(typeof valueInNumber);
console.log(valueInNumber)

// "20" => 20
// "20abc" => NaN
// "true" => 1 ; false => 0
// "null" => 0
// undefined => NaN

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "abc" => true
// "" => false

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
