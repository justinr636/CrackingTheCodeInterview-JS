//  Benchmark using shift() vs dequeue()
//  by Justin Ratra
//
//  jsperf - https://jsperf.com/dequeue-vs-shift

// TODO: Replace with Benchmark.js
var timer = function (name) {
    var start = performance.now();
    return {
        stop: function() {
            var end = performance.now();
            var time = end - start;
            console.log('Timer:', name, 'finished in', time);
        }
    }
};

var numberOfItems = 1000000;
var queue = new Queue();
var array = [];
var allocatedArray = new Array(numberOfItems);

function SetupBenchmark() {
    queue = new Queue();
    array = [];
    allocatedArray = new Array(numberOfItems);
    for (var i = 0; i < numberOfItems; i++) {
        queue.enqueue(i);
        array.push(i);
        allocatedArray[i] = i;
    }
}

function RunBenchmarkTests() {
    var queueTimer = timer('Dequeueing Time');
    while (queue.size > 0) {
        queue.dequeue();
    }
    queueTimer.stop();
    var arrayTimer = timer('Array Shifting Time');
    while (array.size > 0) {
        array.shift();
    }
    arrayTimer.stop();
    var allocatedArrayTimer = timer('Allocated Array Shifting Time');
    while (allocatedArray.size > 0) {
        allocatedArray.shift();
    }
    allocatedArrayTimer.stop();
}


/* Queue implementation */
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