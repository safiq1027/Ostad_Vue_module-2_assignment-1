const address={
    street:"123 Main St",
    country:"USA",
    city:"new York"

}

function getAddressCity(city){

    const res=address.city?city:"UnKnown"
    return res
}
const result=getAddressCity(address.city);
console.log(result)