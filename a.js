function sort(array){
    var x;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if(array[i]<=array[j]){
                    x= array[i];
                    array[i]=array[j]
                    array[j]=x
                }
            }
        }
    return array;
}
var array = [-3,8,4,7,9,-4,-1];
sort(array);
console.log(array);
