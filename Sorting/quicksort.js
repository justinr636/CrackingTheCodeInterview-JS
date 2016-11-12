function quickSort(arr) {
    if (arr.length < 2)
        return arr;
    var pivot = arr[0];
    var low = [], high = [];
    for (var i = 1; i < arr.length; i++) {
        var arrayItem = arr[i];
        arrayItem < pivot 
            ? low.push(arrayItem)
            : high.push(arrayItem);
    }
    return quickSort(low).concat(pivot, quickSort(high));
}