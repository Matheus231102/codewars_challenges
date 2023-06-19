/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
*/

function removeSmallest(array) {
    if (array.length === 0) { return [] }
    let minimal;
    let arraySub = [...array]

    arraySub.forEach((element, index) => {
        if (index === 0) {
            minimal = element
        } else {
            if (element < minimal) {
                minimal = element
            } else {
                return;
            }
        }
    })

    for (let index in arraySub) {
        if (arraySub[index] === minimal) {
            arraySub.splice(index, 1)
            return arraySub
        }
    }
}