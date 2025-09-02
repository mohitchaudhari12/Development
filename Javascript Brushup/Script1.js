/*
a();
//Function Statement or //function declaration
function a(){
    console.log("a called");
}
*/

//function expression
/* var b = function(){
    console.log("b called");
}
b(); */



//Anonymous Function
// function (){
    
// }


//Callback functions in javascript

/* setTimeout(function () {
    console.log("Timer");
}, 5000)

function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
})
 */

/* function attachEventListners(){
let count=0;
document.getElementById("clickMe").addEventListener("click",function abc(){
    console.log("You clicked button",++count);
})
}
attachEventListners(); */

/* console.log("START")
document.getElementById("clickMe")
.addEventListener("click", function cb(){
    console.log("callback")
})
console.log("End") */

/* console.log("Start")
setTimeout(function cbt(){
    console.log("CB setTimeout")
},5000)
console.log("End")
 */


/* console.log("Start")
setTimeout(function cb(){
    console.log("callback!!!")
},5000)

console.log("End")

let startDate = new Date().getDate();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("while expired")
 */

/* const radius = [3,1,2,4];
const calculateArea = function(radius){
    const output = [];
    for(let i = 0; i < radius.length; i++ ){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius))


const calculateCircumference = function(radius){
    const output = [];
    for(let i = 0; i < radius.length; i++ ){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

console.log(calculateCircumference(radius))

const calculateDiameter = function(radius){
    const output = [];
    for(let i = 0; i < radius.length; i++ ){
        output.push(2 *radius[i]);
    }
    return output;
}

console.log(calculateDiameter(radius))
 */

/* const radius = [3,1,2,4]

const area = function(radius){
    return Math.PI *radius * radius
}
const circumference = function(radius){
    return 2*Math.PI*radius
}
const diameter = function(radius){
    return 2 * radius
}

const calculate = function (radius,logic){
    const output = []
    for (let i=0; i<radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter)); */

/* 
const radius = [3,1,4,2,5]
const area = function(radius){
    return Math.PI * radius * radius
}
const circumference = function(radius){
    return 2*Math.PI*radius
}
const diameter = function(radius){
    return 2*radius
}

Array.prototype.calculate = function(logic){
    const output = []
    for(let i=0; i<this.length;i++){
        output.push(logic(this[i]))
    }
    return output
}

console.log(radius.map(area))
console.log(radius.calculate(area))
//console.log(calculate(radius,circumference))
//console.log(calculate(radius,diameter))  */



