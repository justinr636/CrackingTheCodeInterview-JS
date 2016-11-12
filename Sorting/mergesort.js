function mergeSort(arr) {
    var size = arr.length;
    if (size < 2)
        return arr;
    var mid = Math.floor(size / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        left[0] < right[0] 
            ? result.push(left.shift())
            : result.push(right.shift());
    }
    if (left.length > 0)
        return result.concat(left);
    else
        return result.concat(right);
}