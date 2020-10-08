/**

 You have a sheet of n × m grid paper and you'd like to draw a cool design on it. You've decided on a block motif similar to tetris pieces. Specifically, your picture will include the following five types of figures:

 Image of Figures

 The array figures contains a list of integers representing the types of figures you'd like to include in your design. Your task is to create a matrix of integers representing the grid paper, and draw the figures on it according to the following rules:

 Start with a matrix of all 0s, and use the 1-based index of each figure to represent it on the grid. For example, if figures[0] = 5 then the shape added to the grid will look like this:

 [[0, 1, 0],
 [1, 1, 1]]

 Place the figures on the grid in the order they appear in figures. The figures must not overlap any other figures that have already been placed, and they may not be rotated.
 Of all the available locations, choose the one with the lowest row index.
 If there are multiple possible locations with the lowest row index, choose the one among them with the lowest column index.
 It's guaranteed that all figures will fit on the grid.

 Return a matrix of integers representing the grid paper after all the figures have been drawn.

 Example

 For n = 4, m = 4, and figures = [4, 2, 1, 3], the output should be

 almostTetris(n, m, figures) = [[1, 2, 2, 2],
 [1, 1, 3, 0],
 [1, 4, 4, 0],
 [0, 4, 4, 0]]

 example

 Input/Output

 [execution time limit] 4 seconds (js)

 [input] integer n

 An integer representing the height of the grid.

 Guaranteed constraints:
 2 ≤ n ≤ 50.

 [input] integer m

 An integer representing the width of the grid.

 Guaranteed constraints:
 2 ≤ m ≤ 50.

 [input] array.integer figures

 An array of integers representing figures to be drawn on the paper.

 Guaranteed constraints:
 1 ≤ figures.length ≤ 500,
 1 ≤ figures[i] ≤ 5.

 [output] array.array.integer

 Return the resulting paper, after drawing all figures on it.

 */
function almostTetris(n, m, figures) {

}


const tests = [
    {
        n: 4,
        m: 4,
        figures: [4, 2, 1, 3],

        Output: [[1, 2, 2, 2],
            [1, 1, 3, 0],
            [1, 4, 4, 0],
            [0, 4, 4, 0]]
    },
    {
        n: 2,
        m: 2,
        figures: [3],

        expectedOutput:

            [[1, 1],
                [1, 1]]

    }, {
        n: 3,
        m: 3,
        figures: [4, 1, 1, 1, 1, 1],

        expectedOutput:

            [[1, 2, 3],
                [1, 1, 4],
                [1, 5, 6]]


    }, {
        n: 4,
        m: 4,
        figures: [5, 3, 3],

        expectedOutput:

            [[0, 1, 0, 0],
                [1, 1, 1, 0],
                [2, 2, 3, 3],
                [2, 2, 3, 3]]

    }, {
        n: 5,
        m: 5,
        figures: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

        expectedOutput:

            [[1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]]

    }, {
        n: 5,
        m: 10,
        figures: [2, 3, 3, 3, 3],

        expectedOutput:

            [[1, 1, 1, 2, 2, 3, 3, 4, 4, 0],
                [5, 5, 0, 2, 2, 3, 3, 4, 4, 0],
                [5, 5, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]


    }, {

        n: 15,
        m: 15,
        figures: [4, 4, 5, 5, 5, 5, 4, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 4, 4, 4, 5, 4, 4, 4, 4, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4],

        expectedOutput:

            [[1, 0, 2, 0, 0, 3, 0, 0, 4, 0, 0, 5, 0, 0, 0],
                [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 0],
                [1, 7, 2, 0, 8, 0, 0, 9, 0, 10, 0, 11, 6, 6, 6],
                [0, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12, 0],
                [13, 7, 14, 0, 15, 0, 16, 0, 17, 10, 0, 11, 0, 12, 12],
                [13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 0, 0, 12, 0],
                [13, 19, 14, 0, 15, 20, 16, 22, 17, 18]]


    }, {

        n: 20,
        m: 20,
        figures: [2, 5, 1, 5, 1, 5, 2, 2, 1, 1, 5, 1, 5, 1, 2, 1, 1, 1, 1, 2, 1, 5, 2, 5, 5, 2, 2, 5, 5, 1, 5, 1, 1, 2, 5, 2, 1, 1, 5, 5, 1, 1, 2, 2, 5, 1, 5, 2, 5, 1],

        expectedOutput:

            [[1, 1, 1, 2, 3, 5, 4, 9, 10, 6, 7, 7, 7, 8, 8, 8, 11, 12, 14, 16],
                [17, 13, 2, 2, 2, 4, 4, 4, 6, 6, 6, 15, 15, 15, 18, 11, 11, 11, 19, 21],
                [13, 13, 13, 20, 20, 20, 22, 23, 23, 23, 24, 30, 32, 25, 26, 26, 26, 27, 27, 27],
                [33, 28, 37, 38, 29, 22, 22, 22, 31, 24, 24, 24, 25, 25, 25, 34, 34, 34, 35, 41],
                [28, 28, 28, 29, 29, 29, 39, 31, 31, 31, 36, 36, 36, 40, 42, 46, 45, 35, 35, 35]]

    }, {

        n: 25,
        m: 25,
        figures: [1, 2, 2, 5, 5, 1, 2, 1, 5, 2, 3, 2, 4, 3, 1, 4, 1, 2, 2, 2, 2, 1, 3, 2, 5, 4, 2, 1, 4, 4, 1, 2, 2, 3, 4, 1, 3, 2, 3, 5, 3, 2, 1, 1, 3, 1, 4, 3, 3, 4, 4, 1, 1, 5, 4, 2, 1, 5, 1, 5, 5, 3, 1, 2, 3, 3, 5, 1, 1, 1, 2, 2, 5, 4, 5, 1, 5, 3, 3, 4, 1, 2, 5, 4, 5, 4, 4, 3, 1, 4, 1, 5, 4, 3, 2, 2, 3, 4, 3, 4],

        expectedOutput:

            [[1, 2, 2, 2, 3, 3, 3, 4, 6, 8, 5, 7, 7, 7, 9, 10, 10, 10, 11, 11, 12, 12, 12, 13, 15],
                [14, 14, 16, 17, 22, 28, 4, 4, 4, 5, 5, 5, 31, 9, 9, 9, 23, 23, 11, 11, 18, 18, 18, 13, 13],
                [14, 14, 16, 16, 19, 19, 19, 20, 20, 20, 21, 21, 21, 24, 24, 24, 23, 23, 25, 36, 26, 43, 29, 13, 44],
                [30, 46, 16, 27, 27, 27, 32, 32, 32, 33, 33, 33, 34, 34, 35, 52, 53, 25, 25, 25, 26, 26, 29, 29, 57]]

    }, {

        n: 30,
        m: 10,
        figures: [1, 4, 1, 2, 2, 2, 4, 4, 4, 4, 1, 4, 1, 4, 2, 4, 4, 2, 1, 2, 2, 4, 4, 2, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 2, 4, 4, 1, 1, 4, 1, 4, 2, 1, 4, 2, 2, 2, 1, 2, 4, 1, 4, 1, 4, 4, 2, 2, 1, 1, 2, 2, 1, 2, 4, 4, 1, 4, 1, 1, 4, 4, 4, 1, 1, 2, 2, 4, 1],

        expectedOutput:

            [[1, 2, 3, 4, 4, 4, 5, 5, 5, 11],
                [13, 2, 2, 6, 6, 6, 7, 19, 8, 25],
                [9, 2, 10, 26, 12, 27, 7, 7, 8, 8],
                [9, 9, 10, 10, 12, 12, 7, 14, 8, 28],
                [9, 30, 10, 16, 12, 17, 31, 14, 14, 35],
                [15, 15, 15, 16, 16, 17, 17, 14, 39, 40],
                [18, 18, 18, 16, 22, 17, 20, 20, 20, 42],
                [21, 21, 21, 45, 22, 22, 23, 24, 24, 24],
                [29, 29, 29, 50, 22, 53, 23, 23, 55, 60],
                [32, 32, 32, 33, 33, 33, 23, 34, 34, 34]]
    }
];

tests.forEach((test, id) => {
    const response = almostTetris(test.n, test.m, test.figures);

    if (response === test.expectedOutput){
        console.log(id, ') OK');
    } else {
        console.log(id, ') FAIL :', response, test);
    }
})