//----Promise APIs---- <-1->Promise.all();
/*const p1 = new Promise((resolve,reject) => {
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

/* const p1 = new Promise((resolve,reject)=>{
    //setTimeout(()=>resolve("p1 is success"),3000)
    setTimeout(()=>reject("p1 is failed"),3000)
})
const p2 = new Promise((resolve,reject)=>{
    //setTimeout(()=>reject("p2 is faied"),1000)
    setTimeout(()=>resolve("p2 is success"),1000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 is success"),2000)
    //setTimeout(()=>reject("p3 is failed"),2000)
})
Promise.all([p1,p2,p3]).then(res=>{
    console.log(res)
}).catch((err)=>{console.error(err)}) */

//2->Promise.allSetteled();

/*const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 is success"),3000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("p2 is failed"),1000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 is success"),2000)
})
Promise.allSettled([p1,p2,p3]).then(res => console.log(res)).catch((err)=>console.error(err))*/ 

//3->Promise.race
/* const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 is success"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 is failed"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 is success"), 2000);
});
Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err)); 
 */
/* //Promise.any()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p1 is fail"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 is failed"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("p3 is success"), 2000);
  setTimeout(() => reject("p3 is fail"), 2000);
});
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err)
    console.log(err.errors)
  }); */

/* const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("p1 is successful"),2000)
})
const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>reject("p2 is fail"),1000)
})
const p3 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("p3 is successful"),3000)
})
 Promise.any([p1,p2,p3])
  .then(res=>console.log(res))
  .catch((err)=>{
    console.error(err)
    console.log(err.errors)
  })  */
