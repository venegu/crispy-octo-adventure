/********************************************
 * Write a function min that takes in two
 * arguments and returns their minimum
 ********************************************/

 function min(num1, num2) {
    if (num1 < num2) {
        return num1;
        console.log(num1);
    } else if (num2 < num1) {
        return num2;
        console.log(num2);
    } else {
        return "They are one and the same number!";
    }
 }

 console.log(min(1,2));