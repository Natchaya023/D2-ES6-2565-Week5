let rainbow = ["violet","indigo","Blue","Green","Yello","Orange","red"] //Global variable
let messege = "Hello"
function show(rainbow) {
    for (let i = 0; i < rainbow.length; i++){
        //console.log(`Rainbow: ${i}: ${rainbow[i]}`)
    }

    rainbow.forEach((item,index,arr)=>{
        console.log(`${messege} Rainbow ${index}:${item}`)
    })

    let i = 0;
    for (const j of rainbow) { //For of
        //console.log(` ${i} : ${j}`)
        i++
    }

    let a = 0;
    for(const k in rainbow){ //For in
        //console.log(`Rainbow ${a} : ${k}`)
        a++
    }
}
show(rainbow)