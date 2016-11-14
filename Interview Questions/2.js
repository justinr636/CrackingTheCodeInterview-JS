// 2. Given a binary tree, and two nodes, figure out the first shared parent 
//    of the two nodes
// by Justin Ratra
//
// Plan: (Assuming this is not a binary search tree)
//    1. Traverse from root
//    2. Store ancestory tree of each node
//    3. Find the deepest shared node in the ancestory tree
//
// Time Complexity: O(n)

function GetSharedParentOfTwoNodes(rootNode, node1, node2) {
    var node1Ancestors = [], node2Ancestors = [];
    GetPathToNode(rootNode, node1Ancestors, node1);
    GetPathToNode(rootNode, node2Ancestors, node2);
    for (var i = 0; i < node1Ancestors.length && i < node2Ancestors.length; i++) {
        if (node1Ancestors[i] !== node2Ancestors[i])
            break;
    }
    return node1Ancestors[i-1];
}

function GetPathToNode(node, path, targetNode) {
    if (node !== null) {
        path.push(node);
        if (GetPathToNode(node.left, path, targetNode))
            return true;
        if (node.data === targetNode)
            return true;
        if (GetPathToNode(node.right, path, targetNode))
            return true;
        path.pop();
    }
    return false;
}

// Test Cases
var binaryTree = {
    data: 1,
    left: { 
        data: 2,
        left: { 
            data: 4,
            left: null,
            right: null
        },
        right: { 
            data: 5,
            left: null,
            right: null
        }
    },
    right: {
        data: 3,
        left: { 
            data: 6,
            left: null,
            right: null
        },
        right: {
            data: 7,
            left: null,
            right: null
        }
    }
}

// Test Cases
console.log(GetSharedParentOfTwoNodes(binaryTree, 5, 4));
console.log(GetSharedParentOfTwoNodes(binaryTree, 5, 3));
console.log(GetSharedParentOfTwoNodes(binaryTree, 3, 3));