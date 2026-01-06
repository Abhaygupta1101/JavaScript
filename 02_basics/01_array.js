//  array 


//javaScript  array  are  reszable
//And can contain a mix of different data types
const myArr =[0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//  Arrays Methods
 myArr.push(6)
 myArr.push(7)
 //myArr.pop()
 console.log(myArr);

//  myArr.unshift(9)
//  myArr.shift()

//  console.log(myArr.includes(9))

// const newArr =myArr.join() //convert into array to string
// console.log(newArr);
//  console.log(myArr);


 //slice, splice 

  console.log("A", myArr);
  const my = myArr.slice(1, 3)  //return section of arrays  
  console.log(my);
  console.log("B ", myArr)