/******************************************************
 * Write a loop that makes seven calls to console.log
 * to output the following triange:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
********************************************************/

console.log("Attempt 1: The naive attempt");

var symbol = "#"

for (var i = 0; i < 7; i++) {

    if (i == 0){
        console.log(symbol);

    } else {
        symbol = symbol + "#";
        console.log(symbol);
    }
}

console.log(" ");
console.log("Attempt 2: Using the hint from the book!");

for (var tag = "#"; tag.length < 8; tag += "#") {
    console.log(tag);
}