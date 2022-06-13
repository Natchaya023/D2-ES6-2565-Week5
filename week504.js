const drinks=["Coke","Pepsi"]
for(const drink in drinks){
    console.log(drink)
}

const students = [
    { Id: 101, Name: "Mark", Age: 18 },
    { Id: 102, Name: "Jeff", Age: 17 },
    { Id: 103, Name: "Bill", Age: 16 },
]


for(const student of students){
    console.log(`Id: ${students.Id} Name: ${student.Name} Age: ${student.Age}`)
}

for(const student of students){
    //console.log(`Id: ${student.Id} Name: ${ student.Name} Age: ${student.Age}`)

}