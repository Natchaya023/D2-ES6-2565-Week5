//Degine object
const users = [
    {
        "name": "Mark",
        "address":"57/8 Avenue",
        "age":25
    },
    {
        "name": "Mark",
        "address":"59/8 Avenue",
        "age":35
    },
    {
        "name": "Mark",
        "address":"74/8 Avenue",
        "age":45
    }
]

//Object Destructuring with for-of loop
for(let{name,address,age} of users){
    console.log(`${name} Address:${address} ${age} year ole `)
}