/*****************************************************
 * Define a recursive function isEven corresponding to
 * the following description:
 *   - Zero is even
 *   - One is odd
 *   - For any other number N, its evenness is the same
 *     as N - 2
 *
 * The function should accept a number as a param
 * and return a Boolean.
 ****************************************************/

function isEven(number) {
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else if (number < 0) {
        return isEven(-number);
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(-9001));