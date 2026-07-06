// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Failed to load data");
//     }, 5000);
// });

// console.log("Promise created:", p);

// p.then((res) => {
//     console.log("Promise fulfilled:", res);
// }).catch((error) => {
//     console.log("Promise rejected:", error);
// });

// let p1=new Promise((resolve,reject)=>{
//   setTimeout(() => {
//    resolve({
//     name:"rupali",
//    })
//   }, 3000);
// })
// console.log(p1);

// p1.then((data)=>{
//  console.log
//  (data);
// }).catch((err)=>{
//  console.error(err);
// })

// function fetchData(){
//    return new Promise((resolve, reject)=>{
//      setTimeout(() => {
//         resolve({
//          name:"rupali",
//         })
//      }, 3000);
//    })
// }
// let result=fetchData();
// result.then((data)=>{
// return data;
// }).then((data)=>{
// return data;
// }).then((data)=>{
//   console.log("again data fulfilleds",data);
// })

// }).catch((err)=>{
//  console.error("something went wrong");
// })

// let response=fetch('https://6a48118dabfcbaade1193577.mockapi.io/todos');
//  response.then((data)=>{
//     console.log(data);
//     return fetch('https://6a48118dabfcbaade1193577.mockapi.io/todos');
//  }).then((data)=>{
//   console.log(data);
//  })

//  .catch((err)=>{
//   console.error(err)
//  })

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name: "rupali",
    
//       });
//     }, 3000);
//   });
// }

// async function fetchData() {
//   let response1 = await getData();
//   console.log(response1);
//   let response2 = await getData();
//   console.log(response2);
//   let response3 = await getData();
//   console.log(response3);
//   let response4 = await getData();
//   console.log(response4);
//   // console.log(response);
//   // console.log("heloo");
//   //   console.log("heloo");
//   //     console.log("heloo");
// }
// fetchData();


(async function(){
 try {
  let data=await fetch('https://6a48118dabfcbaade1193577.mockapi.io/todos');
  console.log(data);
  
 } catch (error) {
  console.log(error);
 }
})();


console.log("hello");