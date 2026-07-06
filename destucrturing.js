
//object destructing using function
// function greet({name,age}){
//   console.log(`Hello ${name} , your age is ${age}`);
// }

const { useState } = require("react");

// const obj={
//  name:"rupali",
//  age:25
// }

// greet(obj);



//array destructuring using function

// function sum([a,b]){
//   console.log(a+b);
// }
// let arr=[10,5];
// sum(arr);

// const arr=[1,2,3];
// const obj={...arr};
// console.log(obj);


// let obj={
//  name:"rupali",
//  age:25,
// }


// let {name,age}=obj;
// // console.log(name);
// // console.log(age);

// let newObj={
//  ...obj,
//  city:"nashik"
// }
// console.log(newObj);
// console.log(obj);

// function arg1(...arr){
//    let even=arr.filter((even)=>{
//     return even%2==0
//    })

//    let odd= arr.filter((odd)=>{
//     return odd%2!=0
//    })

//    return{
//     even,
//     odd
//    }
// }
// let {even,odd}=arg1(1,2,3,4,5,6,7,8);
// console.log(even);
// console.log(odd);

// const[value, setvalue]=useState();


// function useState(intialValue){
//   let value=intialValue;

// function setvalue(val){
//       value=val
// }
// return[value,setvalue];
// }
// console.log(value);

// console.log("hello");

//rest destructuring with function

// function sum(...numbers){
   
//   return  numbers.reduce((total,num)=>total+num,0
//     );
// }
// let arr=[1,2,3,4,4];
// console.log(sum(...arr));

// //find maximum numbers
// function findMax(...numbers)


let users=['rupa','sai','mahi'];
function consoleThreeUsers(user1,user2,user3){
 console.log(user1);
  console.log(user2);
   console.log(user3);
}
consoleThreeUsers(...users);