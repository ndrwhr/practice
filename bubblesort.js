
Array.implement('bubblesort', function(){
    var length = this.length,
        swap, i;

    do {
        swap = null;
        for (i = 1; i < length; i++)
            if (this[i - 1] > this[i])
                swap = this.swap(i, i - 1);
    } while (swap != null);

    return this;
});

