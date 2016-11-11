// 1.3 - Given two strings, write a method to decide if one is a permutation of the other.
// by Justin Ratra
//
// Plan:
//    1. Validate inputs are strings
//    2. Store all characters of each string in its own hash map
//    3. Return true if hash maps are identical
//
// Time Complexity: O(n)

function AreStringsPermutationsOfEachOther(string1, string2) {
    if (!IsValidString(string1))
        throw 'Argument Exception: "string1" parameter is not of type String';
    if (!IsValidString(string2))
        throw 'Argument Exception: "string2" parameter is not of type String';
    var string1CharacterMap = CreateCharacterMapOfString(string1);
    var string2CharacterMap = CreateCharacterMapOfString(string2);
    return ObjectsAreEqual(string1CharacterMap, string2CharacterMap);
}

function CreateCharacterMapOfString(str) {
    var characterMap = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (characterMap[char])
            characterMap[char]++;
        else
            characterMap[char] = 1;
    }
    return characterMap;
}

function IsValidString(str) {
    if (typeof str === 'string' || str instanceof String)
        return true;
    else
        return false;
}

function ObjectsAreEqual(object1, object2) {
    var propsOfObject1 = Object.getOwnPropertyNames(object1);
    var propsOfObject2 = Object.getOwnPropertyNames(object2);
    if (propsOfObject1.length !== propsOfObject2.length)
        return false;
    for (var i = 0; i < propsOfObject1.length; i++) {
        var prop = propsOfObject1[i];
        if (object1[prop] !== object2[prop])
            return false;
    }
    return true;
}

// Test Cases
console.log(AreStringsPermutationsOfEachOther('abcd', 'dcba'));             // true
console.log(AreStringsPermutationsOfEachOther('racecar', 'carrace'));       // true
console.log(AreStringsPermutationsOfEachOther('race car', 'car race'));     // true
console.log(AreStringsPermutationsOfEachOther('racecar', 'car race'));      // false
console.log(AreStringsPermutationsOfEachOther("exception", false));         // Exception