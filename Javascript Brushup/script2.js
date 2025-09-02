/* const arr = [5,1,2,4,6]

function double(x){
    return x * 2
}
function triple(x){
    return x*3
}
const output = arr.map((x)=>x.toString(2))
console.log(output) */

/* const arr = [1,2,3,4,5]
function double(x){
   return x*2
}
const output = arr.map(double)
console.log(output)
 */

/* //BY USING ARROW FUNCTION
 const arr = [2,4,6,8,10]
const output = arr.map((x)=>{
    return x*2;
})
console.log(output) 
 */

/* //map()::--
const arr = [11,12,13,14,15]
const output = arr.map((x)=>{
    return x.toString(2)
})
console.log(output)

String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); */

//filter()
/* const num = [10,11,12,13,14,15]
const output = num.filter ( (x) => x%2 )
console.log (output) */

/* //filter with arrow function
const arr = [5,1,3,2,4]
const output = arr.filter((x) => x%2 )
console.log(output) */

/*//reduce()
const arr = [5,2,3,7,8]
function findSum(arr){
    let sum = 0
    for(i=0;i<arr.length;i++){
        sum = sum+arr[i]
    }
    return sum
}
console.log(findSum(arr))*/

/* const arr =[5,2,3,1,4]
function findMax(arr) {
    let max = 0
    for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
console.log(findMax(arr)) */

const arr = [3,5,7,9,11]
const output = arr.reduce(function(accumulator,current){
    if(currentfmliacc){
        acc=(acc=)ar{
            r
    }
},0)