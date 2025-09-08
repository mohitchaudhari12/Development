/* "use strict";

//this keyword:
console.log(this)

//this inside function
function x(){
    console.log(this)
}
x() //undefined
window.x() //window :- consider as global object

//this inside object
const obj = {
    a: 10,
    x:function(){
        console.log(this)
    },
}
obj.x()

const student ={
    name:"Amitabh",
    printName: function(){
        console.log(this.name)
    }
}
student.printName();

const student2 ={
    name: "Jaya"
};
//student.printName.call(student2)
//student.printName.apply(student2)
student.printName.bind(student2) */


//this keyword by using arrow function
const obj1 = {
    a : 10,
    x : function() {
        //console.log(this)
        //enclosing lexical context
        const y = () => {
        console.log(this);
        }
        y()
    },
};
obj1.x();