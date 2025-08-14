const accountID=144553;
let accountEmail="vansh@google.com";
var accountPassword="vansh123";
accountCity="Mumbai"
let accountState;
// accountID= 2; // Not Allowed
accountEmail="hello@google.com"
accountPassword="hello123";
accountCity="Delhi";
console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity,accountState]);
/*
Prefer not to use var
because of issue in block scope and function scope.
*/