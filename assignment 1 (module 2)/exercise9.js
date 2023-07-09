function filterEvenNumbes(numbers){
    return numbers.filter(number=>number %2==0)
}

const res=filterEvenNumbes([1,2,3,4,5])
console.log(res)