
Array.implement('combsort', function(){
    var length = this.length,
        gap = length,
        swap, i;

    while (gap > 1 || swap != null){
        gap = Math.max(Math.floor(gap / 1.3), 1);

        swap = null;
        for (i = 0; i + gap < length; i++){
            if (this[i] > this[i + gap]){
                swap = this.swap(i, i + gap);
            }
        }
    }

    return this;
});
