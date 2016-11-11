// 1.4 - Write a method to replace all spaces in a string with '%20'
// by Justin Ratra
//
// Plan:
//    1. Validate input is a string
//    2. Use regex to replace whitespace characters with '%20'
//
// Time Complexity: O(n)

function UrlEncodeSpacesInString(str) {
    if (!IsValidString(str))
        throw 'Argument Exception: "str" parameter is not of type String';
    return str.replace(/\s/g,'%20');
}

function IsValidString(str) {
    if (typeof str === 'string' || str instanceof String)
        return true;
    else
        return false;
}

// Test Cases
console.log(UrlEncodeSpacesInString('/search?q=JavaScript Best Practices'));    // /search?q=JavaScript%20Best%20Practices
console.log(UrlEncodeSpacesInString('One Two  Three   '));                      // One%20Two%20%20Three%20%20%20
console.log(UrlEncodeSpacesInString('nothing'));                                // nothing
console.log(UrlEncodeSpacesInString(true));                                     // Exception