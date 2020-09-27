/*

You are implementing your own programming language and you've decided to add support for merging strings. A typical merge function would take two strings s1 and s2, and return the lexicographically smallest result that can be obtained by placing the symbols of s2 between the symbols of s1 in such a way that maintains the relative order of the characters in each string.

For example, if s1 = "super" and s2 = "tower", the result should be merge(s1, s2) = "stouperwer".

You'd like to make your language more unique, so for your merge function, instead of comparing the characters in the usual lexicographical order,
 you'll compare them based on how many times they occur in their respective strings (fewer occurrences means the character is considered smaller). If the number of occurrences are equal, then the characters should be compared in the usual way. If both number of occurences and characters are equal, you should take the characters from the first string to the result.

Given two strings s1 and s2, return the result of the special merge function you are implementing.

Example

    For s1 = "dce" and s2 = "cccbd", the output should be
    mergeStrings(s1, s2) = "dcecccbd".

All symbols from s1 goes first, because all of them have only 1 occurrence in s1 and c has 3 occurrences in s2.

    For s1 = "super" and s2 = "tower", the output should be
    mergeStrings(s1, s2) = "stouperwer".

Because in both strings all symbols occur only 1 time, strings are merged as usual. You can find explanation for this example on the image in the description.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] string s1

    A string consisting only of lowercase English letters.

    Guaranteed constraints:
    1 ≤ s1.length ≤ 104.

    [input] string s2

    A string consisting only of lowercase English letters.

    Guaranteed constraints:
    1 ≤ s2.length ≤ 104.

    [output] string

    The string that results by merging s1 and s2 using your special merge function.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

 */

function mergeStrings(s1, s2) {
    let result = '';
    const len1 = s1.length;
    const len2 = s2.length;

    const map1 = getMap(s1);
    const map2 = getMap(s2);

    for (var i = 0, j = 0; i < len1 && j < len2;) {
        const ch1 = s1[i];
        const ch2 = s2[j];
        let occ1 = map1[ch1];
        let occ2 = map2[ch2];

        if (occ1 < occ2) {
            result += ch1;
            ++i;
        } else if (occ1 > occ2) {
            result += ch2;
            ++j;
        } else {
            if (ch1 < ch2) {
                result += ch1;
                ++i;
            } else if (ch1 > ch2) {
                result += ch2;
                ++j;
            } else {
                result += ch1;
                ++i;
            }
        }
    }

    if (i < len1) {
        result += s1.substr(i);
    } else if (j < len2) {
        result += s2.substr(j);
    }

    return result;
}


function getMap(s){
    const len = s.length;
    const map = {};
    for(let i = 0; i<len; ++i) {
        let ch = s[i];
        const count = map[ch] || 0;
        map[ch] = (count + 1);
    }
    return map;
}

const tests = [
    {
        s1: "dce",
        s2: "cccbd",
        output: "dcecccbd",
    },
    {
        s1: "super",
        s2: "tower",
        output: "stouperwer"
    },
    {
        s1: "a",
        s2: "z",
        output: "az"
    },
    {
        s1: "uchlmfelno",
        s2: "gr",
        output: "gruchlmfelno"
    },
    {
        s1: "kkihj",
        s2: "jbsmfoftph",
        output: "jbsmfoftphkkihj"
    },
    {
        s1: "enbvszyppzyiydnc",
        s2: "ousswsbeljamma",
        output: "eounbvszsswsbeljammayppzyiydnc"
    },

    {
        s1: "vbpvxohmfudekrniglpym",
        s2: "wyzjgnituhfhyxkfpnccqjhrvf",
        output: "wvbpvxohmfudekrniglpymyzjgnituhfhyxkfpnccqjhrvf"
    },
    {
        s1: "fpniswlxslcjgaau",
        s2: "txwqqryebhjrjwkgx",
        output: "fpnitswlxslcjgaauxwqqryebhjrjwkgx"
    },

    {
        s1: "z",
        s2: "a",
        output: "az"
    },
    {
        s1: "ougtaleegvrabhugzyx",
        s2: "wvieaqgaegbxg",
        output: "owvieaqugtaleegvrabhugzyxgaegbxg"
    }
];

let wrongCount = 0;
tests.forEach((test, id) => {
    const res = mergeStrings(test.s1, test.s2);

    if (res === test.output) {
        console.log('____ test', id, ': OK');
    } else {
        ++wrongCount;
        console.log('____ test', id, ': ERROR');
    }
})