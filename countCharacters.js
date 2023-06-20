/*
The main idea is to count all the occurring characters
in a string. If you have a string like aba,
then the result should be {'a': 2, 'b': 1}.
*/

function count(string) {
    let contagem = {}
    let splitedString = string.split('')
    splitedString.map((value) => {
        if (contagem[value] !== undefined) {
            contagem[value]++
        } else {
            contagem[value] = 1
        } 
    })

    return contagem
}

console.log(count('aba'))