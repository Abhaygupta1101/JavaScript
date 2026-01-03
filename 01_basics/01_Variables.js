const accountId = 1441414
let accountEmail = "abhaygupta@gmail.com"
var accountPassword = "121334"
/*
Prefer not to use var
Because issue in block scope and functional scope
*/
accountCity  = "Bhopal"
let accountState 

//accountId = 2 Not allowed
accountEmail ="Abhay.com"
accountCity = "Damoh"
console.log(accountId);
console.table([accountId, accountEmail,accountPassword, accountCity, accountState])
