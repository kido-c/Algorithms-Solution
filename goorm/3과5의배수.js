// N(1000이하의 자연수)을 입력하고 N이하의 자연수 중 3의 배수, 5의 배수의 합을 구하는 프로그램을 작성하시오

let params = 1000

function sumThreeFive(params) {
    let result = 0
    for(let i = 1; i<=params; i++ ){
        if(i%3===0 || i%5===0){
            result = result + i
        }
    }
    console.log(result)
}

sumThreeFive(params)