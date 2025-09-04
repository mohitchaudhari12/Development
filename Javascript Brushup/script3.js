/* //example on promises in JS
const cart = ["Shirt","Pant","Shoes","Kurta"]

createOrder(cart,function(orderId){
    proceedToPayment(orderId);
});

const promise = createOrder(cart)

promise.then(function (orderId){
    proceedToPayment(orderId);
});
 */

/* const GITHUB_API = "https://api.github.com/users/mohitchaudhari-commits" 

const user = fetch(GITHUB_API);

console.log(user)
 */

/* const cart = ["Shirt","Pant","Kurta","Shoes"]

createOrder(cart,function(orderId){
    proceedToPayment(orderId , function(paymentInfo){
        showOrderSummary(paymentInfo,function(){
            updateWalleteBalance();
        });
    });
});

createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
})
.then((paymentInfo) => updateWalleteBalance(paymentInfo)) */

/* 
//Promise using arrow function
const cart = ["shirt","pant","shoes","kurta"]
createOrder(cart,function(orderId){
    proceedToPay(orderId,function(paymentInfo){
        showrderSummary(paymentInfo,function(){
            updateWalletBalance();
        });
    });
});
createOrder(cart)
.then ((orderId) => proceedToPay(orderId))
.then ((paymentInfo) => showrderSummary(paymentInfo))
.then ((paymentInfo) => updateWalletBalance(paymentInfo)); */

/* const cart = ["shirt","pant","kurta","shoes"]

createOrder(cart,function(orderId){
    proceeedToPay(orderId,function(paymentInfo){
        showOrderSummary(paymentInfo,function(){
            updateWalletBalance();
        })
    })
})
createOrder(cart)
.then((orderId) => proceeedToPay(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo)) */

/* const cart = ["shoes","pant","kurta"]

const promise = createOrder(cart); //orderaId

promise.then(function(orderId){
    console.log(orderId)
    //proceedToPayment(orderId)
});

//producer
function createOrder(cart){
    const pr = new Promise(function (resolve,reject){
        //create order
        //validate cart
        //orderId
    function validatCart(cart){
        return true;
    }
        if(!validatCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err);
        }
        //logic for createOrder
        const orderId = "123456"
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000)
        }
    });
    return pr;
}
 */

//creating costom promise
const cart = ["pant", "kurta", "shoes"];

const promise = createOrder(cart);
console.log(promise);

promise.then(function (orderId) {
  console.log(orderId);
});
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid!");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return false;
}
