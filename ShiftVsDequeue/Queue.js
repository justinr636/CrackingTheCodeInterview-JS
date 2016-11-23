// Implement a queue using a linked list
// by Justin Ratra

function QueueItem (data) {
    this.data = data;
    this.next = null;
}

function Queue() {
    this.front = null;
    this.end = null;
    this.size = 0;
}

Queue.prototype.enqueue = function (item) {
    if (item === null || typeof item === "undefined")
        return;
    var newItem = new QueueItem(item);
    if (this.size === 0) {
        this.front = newItem;
        this.end = newItem;
    } else {
        this.end.next = newItem;
        this.end = newItem;
    }
    this.size++;
};

Queue.prototype.dequeue = function () {
    var front = this.front;
    var size = this.size;
    if (size === 0) {
        return;
    } else if (size === 1) {
        this.end = null;
    }
    this.front = front.next;
    this.size--;
    return front.data;
};