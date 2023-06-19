/*
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
    let arrayElement = string.split('')
    let count = 0

    arrayElement.forEach((element, index) => {
        if (string[index].toUpperCase() == string[index]) {
            arrayElement.splice(index + count, 0, ' ')
            count++
        }
    })

    return arrayElement.join('')
}


console.log(solution("matheusDeSouzaBadia"))
console.log(solution("matheus"))
console.log(solution(""))