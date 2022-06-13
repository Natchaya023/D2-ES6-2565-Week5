//Degine object
const getUser = function(){
    return {
        "name": "Mark",
        "address":"57/8 Avenue",
        "age":25
    }
}


//Destructuring to function parameter
const {fname,address,age} = getUser
console.log(fname,address,age)