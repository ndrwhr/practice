
Array.implement('mergesort', function(start, end){

    if (start == undefined || end == undefined){
        start = 0;
        end = this.length;
    }

    if ((end - start) <= 1) return this;

    var middle = start + Math.floor((end - start) / 2);

    this.mergesort(start, middle);
    this.mergesort(middle, end);

    // TODO: try not to use slice...
    var left = this.slice(start, middle),
        right = this.slice(middle, end),
        min;

    while (left.length || right.length){

        if (left.length && right.length){
            min = (left[0] <= right[0]) ? left.shift() : right.shift();
        } else if (left.length){
            min = left.shift();
        } else if (right.length){
            min = right.shift();
        }

        this[start++] = min;
    }

    return this;
});
