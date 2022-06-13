//Object Destructuring
const students = {
    "fname":"Mark",
    "address":"57/5",
    "age":25,
    "ID":101,
    "department": {
        "name": "Mark",
        "Shift": "Mornitoring",
        "address": {
            "city": "LA",
            "street": "7th Residency Rd",
            "zip": 3333333
        }
    }
}
//Object Destructuring define
// const {fname,address:newAdress,age,ID,grade = 4} = students
// console.log(fname,newAdress,age,,grade)

const {department: { address: { city } } } = students
console.log(city)
// let fname = students.fname
// let address = students.address
// let age = students.age
// let ID = students.ID
// console.log(fname,address,age,ID)
