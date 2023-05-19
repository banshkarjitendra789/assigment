// undefined vs null

let age;
console.log(age)// return undefined
let age1 =null;
console.log(age1); //return null

// types of 

let  names ="rahul";
let b = 12;
console.log( typeof b) // return number
console.log(typeof names) // return string


// Type Coercion and "===" Operator

const value1 ="77";
const  value2 =77;
console.log(value1==value2);//true
console.log(value1===value2);// return false


// object 
const myObject ={};
myObject.name="jitendra";
myObject.age=67;
console.log(myObject)
// second way create object 
const  myObject1 ={"name":"rahul","age":78};
console.log(myObject1);
// create array 
const array =[];

array.push("jietndra") //add value
array.pop() //remove last element
array.shift()//remove first element
array.unshift()// add new value in first position
array.length// get length of array


// create is function

function myadd(a,b){
    return a+b;
}
myadd(2,4);

const my =()=>{
    console.log("i an function")
}
console.log("hello world")