// 1.5 - Implement a method to perform basic string compression using the counts
//       of repeated characters. For example, the string aabcccccaaa would become
//       a2blc5a3. If the "compressed" string would not become smaller than the original
//       string, your method should return the original string.
// by Justin Ratra
//
// Plan:
//    1. Validate input is a string
//    2. Loop over every character in the string
//    3. If the current char is the same as the previous char, increment a counter
//       Else write out the previous char's count and reset the counter
//    4. Return the smaller string (compressed vs original)
//
// Time Complexity: O(n)

function CompressString(str) {
    if (!IsValidString(str))
        throw 'Argument Exception: "str" parameter is not of type String';
    if (str === '')
        return str;
    var compressedString = str[0];
    var counter = 1;
    for (var i = 1; i < str.length; i++) {
        var char = str[i];
        if (char === str[i-1]) {
            counter++;
        } else {
            compressedString += counter + char;
            counter = 1;
        }
    }
    compressedString += counter;
    if (compressedString.length < str.length)
        return compressedString;
    else
        return str;
}

function IsValidString(str) {
    if (typeof str === 'string' || str instanceof String)
        return true;
    else
        return false;
}

// Test Cases
console.log(CompressString('aabcccccaaa'));     // a2b1c5a3
console.log(CompressString('abcde'));           // abcde
console.log(CompressString('abbbbbbccde'));     // a1b6c2d1e1
console.log(CompressString(''));                // ''
console.log(CompressString(null));              // Exception