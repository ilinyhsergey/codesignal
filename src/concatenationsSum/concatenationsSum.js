/**


 Given an array of positive integers a, your task is to calculate the sum of every possible a[i] ∘ a[j], where a[i] ∘ a[j] is the concatenation of the string representations of a[i] and a[j] respectively.

 Example

 For a = [10, 2], the output should be concatenationsSum(a) = 1344.
 a[0] ∘ a[0] = 10 ∘ 10 = 1010,
 a[0] ∘ a[1] = 10 ∘ 2 = 102,
 a[1] ∘ a[0] = 2 ∘ 10 = 210,
 a[1] ∘ a[1] = 2 ∘ 2 = 22.

 So the sum is equal to 1010 + 102 + 210 + 22 = 1344.

 For a = [8], the output should be concatenationsSum(a) = 88.

 There is only one number in a, and a[0] ∘ a[0] = 8 ∘ 8 = 88, so the answer is 88.

 Input/Output

 [execution time limit] 4 seconds (js)

 [input] array.integer a

 A non-empty array of positive integers.

 Guaranteed constraints:
 1 ≤ a.length ≤ 105,
 1 ≤ a[i] ≤ 106.

 [output] integer64

 The sum of all a[i] ∘ a[j]s. It's guaranteed that the answer is less than 253.


 */


function concatenationsSum(a) {
    const len = a.length;
    let sum = 0;

    for (let i = 0; i < len; ++i) {
        for (let k = 0; k < len; ++k) {
            sum += concat(a[i], a[k]);
        }
    }
    return sum;
}

function concat(a, b) {
    return a * Math.pow(10, getDigits(b)) + b;
}
// function concat(a, b) {
//     return +('' + a + b);
// }

// function getDigits(b) {
//     let digitsNum = 1;
//     let num = b;
//     while ((num = Math.floor(num / 10)) > 0) {
//         ++digitsNum;
//     }
//     return digitsNum;
// }
function getDigits(b) {
    return Math.floor(Math.log10(b)) + 1;
}


const tests = [
    {
        a: [10, 2],
        expectedOutput: 1344
    },
    {
        a: [8],
        expectedOutput: 88

    },
    {
        a: [1, 2, 3],
        expectedOutput: 198
    },
    {
        a: [1000000, 1000000, 1000000, 1000000],
        expectedOutput: 160000016000000
    },
    {
        a: [987153, 239178, 389649, 469261, 130806],
        expectedOutput:
            11080246080235
    },
    {
        a: [393496, 920577, 155905, 238986, 131066, 785660, 359269, 545445],
        expectedOutput: 28243260243232
    },
    {
        a: [1, 10, 100, 1000, 10000, 100000, 1000000],
        expectedOutput: 12345684320987
    },
    {
        a: [9, 8, 7, 6, 5, 4, 3, 2, 1],
        expectedOutput: 4455
    },
];


tests.some((test, id) => {
    const res = concatenationsSum(test.a);
    if (res !== test.expectedOutput) {
        console.log('____ test #', id, 'FAIL returned:', res, ', for test:', test); // todo
        return  true;
    } else {
        console.log('____ test #', id, 'OK'); // todo
        return false;
    }
})