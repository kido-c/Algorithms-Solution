// 양의 정수를 입력 받고 그 수의 약수를 모두 출력하는 프로그램을 작성하시오

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