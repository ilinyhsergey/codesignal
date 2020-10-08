/**
 Alice and Bob are playing a game. At the beginning of the game, the players are given an array of integers numbers. Then, on each move one of the players can remove any two consecutive elements numbers[i] and numbers[i + 1] from the array if numbers[i] = numbers[i + 1], i.e. any matching pair of neighbouring elements can be removed.

 The first player who is unable to make a move loses the game. Alice goes first.

 Your task is to find out who will win the game, assuming both Alice and Bob play optimally. Return the name of the winner - "Alice" if Alice will win, and "Bob" if Bob will win.

 Example

 For numbers = [1, 4, 5, 5, 6], the output should be removingPairsGame(numbers) = "Alice".
 Alice starts the game and removes the pair (numbers[2] = 5, numbers[3] = 5) from the array. After her move the array looks like [1, 4, 6].
 Bob cannot make a move. So the winner is "Alice".

 For numbers = [1, 3, 3, 1, 5], the output should be removingPairsGame(numbers) = "Bob".
 Alice starts the game by removing the pair (numbers[1] = 3, numbers[2] = 3). After her move the array looks like [1, 1, 5].
 Bob removes the pair (numbers[0] = 1, numbers[1] = 1), which leaves Alice with the array [5].
 Alice can't play, so the winner is "Bob".

 For numbers = [1, 2, 2, 3, 3, 1, 1], the output should be removingPairsGame(numbers) = "Alice".
 Alice starts the game by removing the pair (numbers[1] = 2, numbers[2] = 2). After her move the array looks like [1, 3, 3, 1, 1]. Note, that Alice could also have removed any of pairs (numbers[3] = 3, numbers[4] = 3) or (numbers[5] = 1, numbers[6] = 1) as her first move.
 After that Bob has several possible moves: he can either remove (numbers[1] = 3, numbers[2] = 3) or remove (numbers[3] = 1, numbers[4] = 1).
 But no matter which pair Bob will remove, Alice will remove the remaining pair, leaving Bob only one number remaining, and thus winning the game.

 Input/Output

 [execution time limit] 4 seconds (js)

 [input] array.integer numbers

 The initial array of integers.

 Guaranteed constraints:
 1 ≤ numbers.length ≤ 105,
 1 ≤ numbers[i] ≤ 109.

 [output] string

 The name of the winner of the game: "Alice" or "Bob".

 */
function aliceAndBob(numbers) {

}


const tests = [
    {
        numbers: [1, 4, 5, 5, 6],

        expectedOutput:

            "Alice"

    },{
    numbers: [1, 3, 3, 1, 5],

expectedOutput:

    "Bob"

    },{
    numbers: [1, 2, 2, 3, 3, 1, 1],

expectedOutput:

    "Alice"

    },{

    numbers: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],

expectedOutput:

    "Alice"

    },{

    numbers: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],

expectedOutput:

    "Bob"

    },{

    numbers: [1],

expectedOutput:

    "Bob"


    },{

    numbers: [1000000000],

expectedOutput:

    "Bob"

    },{

    numbers: [1, 2, 2, 1, 3, 3, 1, 4, 5, 6, 6, 5, 4],

expectedOutput:

    "Bob"


    },{

    numbers: [1, 2, 2, 1, 3, 3, 1, 4, 5, 6, 6, 5, 4, 7, 7],

expectedOutput:

    "Alice"


    },{

    numbers: [3, 5, 6, 1, 2, 4, 1, 2, 2, 3, 3, 1, 1],

expectedOutput:

    "Alice"

    }, {

        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],

        expectedOutput:

            "Alice"
    }
];

tests.forEach((test, id) => {
    const response = aliceAndBob(test.numbers);

    if (response === test.expectedOutput){
        console.log(id, ') OK');
    } else {
        console.log(id, ') FAIL :', response, test);
    }
})