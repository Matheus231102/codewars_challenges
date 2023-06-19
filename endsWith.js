/*
    solution('abc', 'bc') 
    solution('abc', 'd') // returns false
*/

function solution(str, ending) {
    return str.endsWith(ending)
}

function anotherSolution(str, ending) {
    return str.slice(str.length - ending.length) === ending
}

console.log(solution('abc', 'bc'))
console.log(solution('abc', 'd'))