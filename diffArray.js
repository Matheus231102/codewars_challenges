// diferença de arrays

function arrayDiff(firstArray, secondArray) {
    const newArray = firstArray.filter((value) => {
        return !secondArray.includes(value)
    })
    return newArray
}

const array1 = [1, 2, 2, 2, 3]
const array2 = [2]

console.log(arrayDiff(array1, array2))

