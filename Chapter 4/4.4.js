// 4.4 - Given a binary tree, design an algorithm which creates a linked list of all the
//       nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked
//       lists).
// by Justin Ratra
//
// Plan:
//    1. Use Preorder Tree Traversal
//    2. Create a linked list from each array
//
// Time Complexity: O(n)

function CreateLinkedListsFromBinaryTree(treeNode) {
    //ValidateTree(tree);
    var linkedLists = [];
    PopulateMapOfNodesUsingPreOrderTraversal(treeNode, 0, linkedLists)
    return linkedLists;
}

function PopulateMapOfNodesUsingPreOrderTraversal(node, height, linkedLists) {
    if (node === null)
        return;
    height++;
    linkedLists[height-1] 
        ? linkedLists[height-1].prepend(new LinkedListItem(node, null))
        : linkedLists[height-1] = new LinkedList(new LinkedListItem(node, null));
    PopulateMapOfNodesUsingPreOrderTraversal(node.left, height, linkedLists);
    PopulateMapOfNodesUsingPreOrderTraversal(node.right, height, linkedLists);
}

function BinaryTreeNode(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

function LinkedList(head) {
    var self = this;
    this.head = head;

    this.prepend = function (item) {
        item.next = self.head;
        self.head = item;
    };
}

function LinkedListItem(data, next) {
    this.data = data;
    this.next = next;
}

// Test Cases
var testTree1 = 
    new BinaryTreeNode(45,
        new BinaryTreeNode(12, new BinaryTreeNode(1, null, null), null),
        new BinaryTreeNode(90, null, new BinaryTreeNode(100, null, null)));
console.log(CreateLinkedListsFromBinaryTree(testTree1));
//          [
//              45,
//              12  ->  90,
//              1   ->  100
//          ]

var testTree2 = 
    new BinaryTreeNode(46,
        new BinaryTreeNode(12, 
            new BinaryTreeNode(3, 
                new BinaryTreeNode(1, null, null), new BinaryTreeNode(5, null, null)), 
            new BinaryTreeNode(45, null, null)),
        new BinaryTreeNode(99, 
            new BinaryTreeNode(90, null, null), new BinaryTreeNode(150, null, null)));
console.log(CreateLinkedListsFromBinaryTree(testTree2));
//          [
//              46,
//              12  ->  99,
//              3   ->  45  ->  90  ->  150,
//              1   ->  5,
//          ]