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

// 1b. Imagine the computer doesn't have enough RAM to hold
//     the upper bound above in memory
//
// Plan:
//    1. Split the upperbound in half and increment each half separately
//    2. Prepend the second half with 1 so it is easy to increment, and 
//       drop off the leading 1 when printing

function PrintAllNumbersOfNDigitsWithoutRAM(n) {
    if (Number.isInteger(n) && n > 0) {
        var mid = Math.floor(n/2);
        var startFirstHalf = '1' + ReturnXZeroes(mid);
        var endFirstHalf = ReturnEndIndex(startFirstHalf);
        for (startFirstHalf; startFirstHalf < endFirstHalf; startFirstHalf++) {
            var startSecondHalf = '1' + ReturnXZeroes(n-mid-1);
            var endSecondHalf = ReturnEndIndex(startSecondHalf);
            for (startSecondHalf; startSecondHalf < endSecondHalf; startSecondHalf++) {
                console.log(startFirstHalf + startSecondHalf.toString().slice(1) + '');
            }
        }
    }
    else
        throw 'Argument Exception: Parameter "n" must be an integer greater than 0';
}

function ReturnXZeroes(x) {
    var str = '';
    for (var i = 0; i < x; i++) {
        str += '0';
    }
    return str;
}

function ReturnEndIndex(startIndex) {
    return startIndex + '0';
}

// Test Cases
PrintAllNumbersOfNDigitsWithoutRAM(4);      // 1000 -> 9999
PrintAllNumbersOfNDigitsWithoutRAM(NaN);    // Exception