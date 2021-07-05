// Run by Node.js

let params = 100

function getNum(params) {
    let result = ""

    for(let i =1; i<=params; i++){
        if(params%i===0){
            result = result + i + " "
        }
    }
    return result
}

getNum(params)