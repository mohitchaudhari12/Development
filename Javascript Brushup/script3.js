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

const cart = ["Shirt","Pant","Kurta","Shoes"]

createOrder(cart,function(orderId){
    proceedToPayment(orderId , function(paymentInfo){
        showOrderSummary(paymentInfo,function(){
            updateWalleteBalance();
        });
    });
});

createOrder(cart)
.then(function(orderId){
    proceedToPayment(orderId)
})
.then(function(orderId){
    proceedToPayment(orderId)
})