//async function

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved successfully");
  }, 10000);
});

async function getData() {
  const c = await p;
  console.log(c);
}
getData();
// const c1 = getData();
// c1.then(res=>console.log(res)).catch(err=>console.error(err))
