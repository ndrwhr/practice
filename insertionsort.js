
Array.implement('insertionsort', function(){
    var length = this.length,
        swap, i, j;

    for (i = 1; i < length; i++){
        if (this[i - 1] > this[i]){
            for (j = i; j > 0 && this[j - 1] > this[j]; j--){
                swap = this[j - 1];
                this[j - 1] = this[j];
                this[j] = swap;
            }
        }
    }

    return this;
});
