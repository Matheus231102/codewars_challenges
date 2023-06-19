// exemplo digPow(245, 2) => (2^^2 + 4^^3 + 5^^4) = (K * 2)

/*
Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.
*/

function digPow(n, p) {
    const arrayOfN = String(n).split('').map((value) => {
        return parseFloat(value)
    })
    let sum = 0
    for (let index = 0; index < arrayOfN.length; index++) {
        sum += arrayOfN[index] ** (p + index)
    }
    // math -> sum = n * k"  
    const kNumber = sum / n

    return (kNumber % 1 === 0) ? kNumber : -1; 
}

console.log(digPow(46288, 3))
console.log(digPow(46287, 3))

