// 4.2 - Given a directed graph, design an algorithm to find out whether there is a route
//       between two nodes. (Assuming all nodes are marked as unvisited).
// by Justin Ratra
//
// Plan:
//    1. Use BFS from the starting node
//    2. Return true if we reach the target node
//    3. Otherwise return false
//
// Time Complexity: O(v + e)

function TwoNodesAreConnected(start, end) {
    start.visited = true;
    var queue = [start];
    while (queue.length > 0) {
        var node = queue.shift();
        if (node === end) return true;
        node.neighbors.forEach(function (neighbor) {
            if (!neighbor.visited) {
                neighbor.visited = true;
                queue.push(neighbor);
            }
        });
    }
    return false;
}

// Test Cases
var node1 = { data: null, visited: false, neighbors: [] };
var node2 = { data: null, visited: false, neighbors: [] };
var node3 = { data: null, visited: false, neighbors: [] };
var node4 = { data: null, visited: false, neighbors: [] };
var node5 = { data: null, visited: false, neighbors: [] };
var node6 = { data: null, visited: false, neighbors: [] };
node1.neighbors = node1.neighbors.concat([node2, node3, node4]);
node3.neighbors = node3.neighbors.concat([node5]);
node5.neighbors = node5.neighbors.concat([node6]);

console.log(TwoNodesAreConnected(node1, node6));    // true
console.log(TwoNodesAreConnected(node4, node6));    // false
console.log(TwoNodesAreConnected(node5, node5));    // true