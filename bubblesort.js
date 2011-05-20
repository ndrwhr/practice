
Array.prototype.bubblesort = function(){
    var length = this.length,
        swap, i;

    do {
        swap = null;
        for (i = 1; i < length; i++){
            if (this[i - 1] > this[i]){
                swap = this[i - 1];
                this[i - 1] = this[i];
                this[i] = swap;
            }
        }
    } while (swap != null);

    return this;
};

