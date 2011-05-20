
Array.implement('selectionsort', function(){
    var length = this.length,
        min, i, j;

    for (i = 0; i < length - 1; i++){
        for (min = j = i; j < length; j++)
            if (Math.min(this[min], this[j]) == this[j])
                min = j;

        this.swap(i, min);
    }

    return this;
});
