
Array.implement('cocktailsort', function(){
    var length = this.length,
        start = 1,
        end = length - 1,
        swap, i;

    do {

        swap = undefined;

        for (i = start; i <= end; i++){
            if (this[i - 1] > this[i]){
                swap = this.swap(i, i - 1);
            }
        }
        end--;

        if (swap == undefined) break;

        for (i = end; i >= start; i--){
            if (this[i - 1] > this[i]){
                swap = this.swap(i - 1, i);
            }
        }
        start++;

    } while (swap != undefined);

    return this;
});
