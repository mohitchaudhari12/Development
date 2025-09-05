/*----Promise APIs
    Promise.all();
    Promise.se
*//* 
const p1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P1 Success"),3000);
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P2 is Success"),1000);
    //setTimeout(() => response("p2 Failed"),1000)
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P3 Success"),2000);
})

Promise.all([p1,p2,p3]).then(res =>{
    console.log(res);
}).catch((err)=>console.error(err)); */

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 is success"),3000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("p2 is faied"),1000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 is success"),2000)
})
Promise.all([p1,p2,p3]).then(res=>{
    console.log(res)
}).catch((err)=>{console.error(err)})