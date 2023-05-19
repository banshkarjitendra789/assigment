const my=require('./test');

const newValue =()=>{
    console.log("hello .")
     my(1,3);
}
newValue();
// callback

const mycallback =()=>{
    console.log("call back")
    console.log("completed")
}
console.log("before callback")
setTimeout(mycallback,5000);
console.log("after continue")
