let a = [5,4,7,8,12,4,7,89,51,23,4,7];
function removeElement (arr, elem){
    let j=0;
    var newArr=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!=elem){
            newArr[j] = arr[i];
            j++
        }
    }
    return newArr;
}
console.log(removeElement(a, 4));
function sortArray(arr) {
    var x;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if(arr[i]<=arr[j]){
                    x= arr[i];
                    arr[i]=arr[j]
                    arr[j]=x
                }
            }
        }
    return arr;
}
console.log(sortArray(a));
function removeDups(arr) {
    sortArray(arr);
    let newArr=[];
    let j=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!=arr[i+1]) {
            removeElement(arr, arr[i]);
        }
    }return newArr
}
console.log(removeDups(a));