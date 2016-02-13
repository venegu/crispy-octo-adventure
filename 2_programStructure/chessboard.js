/********************************************************
 * Write a program that creates a string that represents
 * an 8 x 8 grid, using newline characters to seperate
 * lines. At each position of the grid there is either a
 * space or a "#" character. The characters should form a
 * chess board that looks like this:
 *  # # # #
 *   # # # #
 *  # # # #
 *   # # # #
 *  # # # #
 *   # # # #
 *  # # # #
 *   # # # #
*******************************************************/

console.log("Attempt 1");

var lengthSide = 8;

var chessBoard = "";

for (var y = 0; y < lengthSide; y++) {

    for (var x = 0; x < lengthSide; x++) {

        if ((x + y) % 2 == 0) {
            chessBoard += "#";

        } else {
            chessBoard += " ";
        }
    }

    chessBoard += "\n";
}

console.log(chessBoard);