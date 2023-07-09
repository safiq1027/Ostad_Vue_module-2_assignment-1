//Create an Object
const obj={
    name:"Md Safiqul Islam",
    age:50,
    city:"Cumilla"
}

//create an array
const arr=[15,20,25,30]
//function create
function destructureExample(obj,arr){
    const {name,}=obj
    const [, ,age,]=arr
    return{name,age}
}

const result=destructureExample(obj,arr)
console.log(result)
