// Primitive data types

const { use } = require("react");

/*
there are 7 types
1- String
2-Number 
3-Boolean
4-null
5-Undefined
6-Symbol
7-BigInt //big number se jada store  ho ta haii

*/
const score =  100
const scoreValue = 100.3
const isloggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId  = Symbol('123')
console.log(id  === anotherId)
//const   bigNumber = 9302670437766869868n

//Reference (Non Primitive ) data types

//Array
const names =  ["Abhay", "Aman", "Vikash"]


//Objects

let mydata ={
    name:" Abhay",
    age: 22,
    //data types kuch bhi ho sakta hai
}
//Functions
const myFunction= function(){
 console.log("Hello world")
}


//************     Memory
//Stack (primitive), Heap (Non Primitive )
 
let myage = "22"
 
let anotherage = myage
console.log(anotherage)

let userOne ={
    email: " abha.com",
    upi: "user@ybl"
}
//objects ko .email se exces kar sak te hai
let  userTwo = userOne
userTwo.email ="abhaay.com"
console.log(userOne.email);
console.log(userTwo.email);