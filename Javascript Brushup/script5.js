/* //async function

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 resolved successfully");
  }, 20000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 resolved successfully");
  }, 40000);
});

async function getPromise() {
  console.log("Hello Patlu!")
  //Here the JS engine was waiting for promise to resolve  
  const val_1 = await p1;
  console.log("Message 1")
  console.log(val_1);

  const val_2 = await p2;
  console.log("Message 2")
  console.log(val_2);

}
getPromise();

// function getData(){
//     p.then((res)=>console.log(res))
//     console.log("HII")
// }
// getData();

 */

/* 
//Example of async and await function
const API_URL = "https://api.github.com/users/mohitchaudhari12"

async function handlePromise() {
    
    const data = await fetch(API_URL)

    const jsonValue = await data.json()
    
    console.log(jsonValue)

}
handlePromise(); */

const API_URL = "https://otunibahinaurlinvalid";
async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err)
  }
}
handlePromise();
