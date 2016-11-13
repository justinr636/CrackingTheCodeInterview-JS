// 4.5 - Implement a function to check if a binary tree is a binary search tree
// by Justin Ratra
//
// Plan:
//    1. Use inorder traversal
//    2. Verify every node is greater than the last checked node
//
// Time Complexity: O(n)

var lastCheckedNodeValue = Number.MIN_SAFE_INTEGER;

function IsABinarySearchTree(node) {
    //ValidateTree(node)
    if (node === null)
        return true;
    if (!IsABinarySearchTree(node.left))
        return false;
    if (node.data < lastCheckedNodeValue)
        return false;
    lastCheckedNodeValue = node.data;
    if (!IsABinarySearchTree(node.right))
        return false;
    return true;
}

function BinaryTreeNode(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

// Test Cases
var testTree1 = 
    new BinaryTreeNode(45,
        new BinaryTreeNode(12, new BinaryTreeNode(1, null, null), null),
        new BinaryTreeNode(90, null, new BinaryTreeNode(100, null, null)));
console.log(IsABinarySearchTree(testTree1));    // true

var testTree2 = 
    new BinaryTreeNode(46,
        new BinaryTreeNode(12, 
            new BinaryTreeNode(3, 
                new BinaryTreeNode(1, null, null), new BinaryTreeNode(5, null, null)), 
            new BinaryTreeNode(45, null, null)),
        new BinaryTreeNode(99, 
            new BinaryTreeNode(100, null, null), new BinaryTreeNode(150, null, null)));
console.log(IsABinarySearchTree(testTree2));    // false