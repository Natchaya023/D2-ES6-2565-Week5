function show(){
    //const student = ["Mark", 25, 101]
    const student = [
        {Name : "Mark",Age : 18,ID : 101},
        {Name : "ZEE",Age : 19,ID : 102},
        {Name : "WAVE",Age : 19,ID : 103},
    ]
    return student
}

let showInfo = show()
console.log(showInfo)
/*
let i = 0;
for(const m in showInfo){
    console.log(Student ${i} ${showInfo[m]})
    i++
}

for(let i = 0;i < showInfo.length; i++){
    // console.log(${showInfo[i]})
}
*/