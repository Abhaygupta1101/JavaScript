//const tinderUser = new Object()//this  single turn object
const  tinderUser ={}//this is non single turn object
tinderUser.id = "123abc";
tinderUser.name="abahay"
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

//Object  k ander  object ko  call kar na
const regularUser = {
    email:"abhaygupta9302@.com",
    fullname:{
        userfullname:{
           firstname :"abhay",
           lastname:"Gupta" 
        }
    }
}
//console.log(regularUser.fullname.userfullname);
    

//objects k ander object ko call kar na

const obj1 ={1 : "a", 2 : "b"}
const obj2 ={3 : "a", 4 : "b"}
//const obj3 ={obj1, obj2}
//const obj3 = Object.assign({}, obj1 ,obj2)
const obj3 ={...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id : 1,
        email: " abhaygupta@.com"
    },
    {
        id:2,
        email: " ashu.com"
    }
]
users[1].email
//console.log(tinderUser);
//console.log(Object.keys(tinderUser))



//Objects destructuring and JSON API


const course = {
    coursename: "English ",
    price :"999",
    courseInstructor:"don't share"
}

//{} yja apne maan se name de sak te hai 
// destructure kar sak te hai
const {price}= course
console.log(price);


// ++++++++++++ API in java Script
//Object
// {
//     "name": "abhay",
// }


//Arrays
// [
//     {},
//     {},
//     {}
// ]