//++++++Date +++++++++++
// let  myDate = new Date()
// //console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2026, 0, 25)
// console.log(myCreatedDate.toDateString())
let myCretedDate = new  Date("01-1-2026")
let myTimeStamp =Date.now()
// console.log(myTimeStamp)
// console.log(myTimeStamp.getTime());
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    //ctrl+space 
})