// 4.3 - Given a sorted (increasing order) array with unique integer elements, write an
//       algorithm to create a binary search tree with minimal height.
// by Justin Ratra
//
// Plan:
//    1. Create parent node by finding midpoint of array
//    2. Create children nodes by recursively creating binary search trees
//
// Time Complexity: O(n)?

function CreateBinarySearchTreeFromArray(array) {
    //ValidateArray(array);
    if (array.length === 1) {
        return new BinaryTreeNode(array[0], null, null);
    } else if (array.length === 2) {
        return new BinaryTreeNode(array[1], array[0], null);
    } else if (array.length === 3) {
        return new BinaryTreeNode(array[1], array[0], array[2]);
    } else {
        var midpoint = Math.floor(array.length / 2);
        return (
            new BinaryTreeNode(array[midpoint], 
            CreateBinarySearchTreeFromArray(array.slice(0, midpoint)),
            CreateBinarySearchTreeFromArray(array.slice(midpoint+1)))
        );
    }
}

function BinaryTreeNode(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

// Test Cases
console.log(CreateBinarySearchTreeFromArray([1, 2, 3]));
//            2
//          /   \
//         1     3

console.log(CreateBinarySearchTreeFromArray([1, 12, 45, 90, 100]));              
//            45
//          /    \
//        12     100
//       /  \    /  \
//      1    *  90   *

console.log(CreateBinarySearchTreeFromArray([1, 3, 12, 45, 46, 90, 99, 150]));   
//            46
//          /    \
//        12      99
//       /  \    /  \
//      3   45  90  150
//     / \
//    1   *