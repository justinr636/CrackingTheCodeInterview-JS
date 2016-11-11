// 1.1 - Implement an algorithm to determine if a string has all unique characters.
// by Justin Ratra
//
// Plan:
//    1. Validate input is a string
//    2. Store all characters in a hash map
//    3. Return true if no character appear more than once
//
// Time Complexity: O(n)

function AreAllCharactersUnique(str) {
    if (IsValidString(str)) {
        var characterMap = {};
        for (var i = 0; i < str.length; i++) {
            var char = str[i];
            if (characterMap[char])
                return false;
            else
                characterMap[char] = true;
        }
        return true;
    }
    throw 'Argument Exception: "str" parameter is not of type String';
}

function IsValidString(str) {
    if (typeof str === 'string' || str instanceof String)
        return true;
    else
        return false;
}

// Test Cases
console.log(AreAllCharactersUnique('abcd'));            // true
console.log(AreAllCharactersUnique('abbd'));            // false
console.log(AreAllCharactersUnique('false'));           // true
console.log(AreAllCharactersUnique(''));                // true
console.log(AreAllCharactersUnique(new String()));      // true
console.log(AreAllCharactersUnique(false));             // false