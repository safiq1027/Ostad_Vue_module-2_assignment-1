function sortNumbers(numbers){
    return numbers.sort((a,b)=>a-b)
}

const res=sortNumbers([5,2,8,1,4])
console.log(res)