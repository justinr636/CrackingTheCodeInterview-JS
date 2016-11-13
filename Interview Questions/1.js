// 1a. Given an integer n, print all numbers that have
//     n digits that are NOT zero-padded (NO leading zeros)
// by Justin Ratra
//
// Plan:
//    1. Start = '1' + (n-1)*'0'
//    2. End = start + '0'
//

function PrintAllNumbersOfNDigits(n) {
    if (Number.isInteger(n) && n > 0) {
        var start = '1';
        for (var i = 0; i < (n-1); i++) {
            start += '0';
        }
        var end = start + '0';
        for (start; start < end; start++) {
            console.log(start);
        }
    }
    else
        throw 'Argument Exception: Parameter "n" must be an integer greater than 0';
}

// Test Cases
PrintAllNumbersOfNDigits(1);    // 1, 2, 3, 4, 5, 6, 7, 8, 9
PrintAllNumbersOfNDigits(2);    // 10 -> 99

