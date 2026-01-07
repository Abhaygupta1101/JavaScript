//there are two type od declare objects 
//1 Literal
//2 constructor
//object.create
//Object literals 

const mysym = Symbol("key")

 const JsUser = {
    
    name:"abhay", "full name" : "Abhay Gupta",
    mysym:"myKey1",
    age :18,
    location:"Bhopal",
    Email:"abhaygupta9302@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]


 }

 console.log(JsUser.Email)
 console.log(JsUser["Email"])
 console.log(JsUser["full name"])
 console.log(JsUser.mysym)

 JsUser.Email = "abhjay.com"
 Object.freeze(JsUser)
 JsUser.Email  = "abhjay.com"
 console.log(JsUser)
 JsUser.greeting = function(){
   console.log("Hello JS user")
 }

 console.log(JsUser.greeting());