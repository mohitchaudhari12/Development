// var a = 100;
// {
//     var a= 10;
//     let b = 20;
//     const c = 30;
    
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);


// const a = 100;
// {
//     const a = 200;
//     {
//         const a = 300;
//         console.log(a);
//     }
// }

// function z(){
//     var b = 900;
//     function x(){
//     var a = 7;
//     function y(){
//         console.log(a,b);
//      }
//     y();
// }
// x();
// }
// z();


// function x (){
//     var i = 1;
//     setTimeout(function (){
//         console.log(i)
//     },3000 )
//     console.log("I am Groot")
// }
// x();


// function x(){
//     for(var i=1; i <= 5; i++){
//         function close(j){
//             setTimeout(function () {
//          console.log(j);
//         }, j * 1000 );
//         } 
//         close(i);
//     }
//     console.log("I am Groot!");
// }
// x();

// function outest(c){
//     function outer(b){
//         let a = 10;
//         function inner(){
//             console.log(a,b,c);
//         }
//         return inner;
//     }
//     return outer;
//     }
// var close = outest(20)("I am Groot!!!")
// close();

// function counter(){
//     var count = 0;
//     return function incrementCounter(){
//         count++;
//         console.log(count)
//     }
// }
// var counter1 = counter()
// counter1();
// counter1();

// var counter2 = counter();
// counter2();



// function Counter(){
//     var count = 0;
//     this.incrementCounter = function(){
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function(){
//         count--;
//         console.log(count)
//     }
// }
// var counter1 = new Counter;
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();


//Garbage Collection in JavaScript

// function a (){
//     var x = 0,z=10;
//     return function b(){
//         console.log(x);
//     }
// }
//  var y = a();
//  y(); 

// const a = (x,y) => {
//     z = x+y;
//     console.log(z);
//     return a;
// }
// a(5,6);
// a(7,5)

