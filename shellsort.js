
Array.implement('shellsort', function(){
    var length = this.length,
        increment = Math.round(length / 2),
        swap, i, j;

    while (increment > 0){
        for (i = increment; i < length; i++){
            swap = this[i];
            for (j = i; j >= increment && this[j - increment] > swap; j -= increment)
                this[j] = this[j - increment];
            this[j] = swap;
        }

        increment = Math.round(increment / 2.2);
    }

    return this;
});

