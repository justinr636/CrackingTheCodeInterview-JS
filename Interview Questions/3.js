// 3. Find two numbers in an array which sums to a particular number
// by Justin Ratra
//
// Plan:
//    1. Sort the array
//    2. Sum the numbers at the highest and lowest indexes
//    3. Adjust the indexes depending on the distance from the target
//
// Time Complexity: O(n log n)

function FindTwoNumbersWhichSumToATarget(array, target) {
    //ValidateIntegerArray(array);
    var sortedArray = MergeSort(array);
    var low = 0, 
        high = sortedArray.length - 1;
    while (low < high) {
        var sum = sortedArray[low] + sortedArray[high];
        if (sum < target) {
            low++;
        } else if (sum > target) {
            high--;
        } else {
            return [sortedArray[low], sortedArray[high]];
        }
    }
    return [];
}

function MergeSort(array) {
    var arraySize = array.length;
    if (arraySize < 2)
        return array;
    var mid = Math.floor(arraySize / 2);
    var left = MergeSort(array.slice(0, mid));
    var right = MergeSort(array.slice(mid));
    return Merge(left, right);
}

function Merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        left[0] < right[0]
            ? result.push(left.shift())
            : result.push(right.shift());
    }
    return result.concat(left.length > 0 ? left : right);
}

// Test Cases
var test = [9, 3, 6, 1, 6, 7, 84, 13, 61, 31];
FindTwoNumbersWhichSumToATarget(test, 13);      // [6, 7]
FindTwoNumbersWhichSumToATarget(test, 92);      // [31, 61]
FindTwoNumbersWhichSumToATarget(test, 192);     // []