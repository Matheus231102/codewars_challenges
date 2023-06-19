/*
    solution('abc', 'bc') 
    solution('abc', 'd') // returns false
*/

function solution(str, ending) {
    return str.slice(str.length - ending.length) === ending
}

