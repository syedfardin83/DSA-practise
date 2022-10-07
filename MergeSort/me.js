const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array){
    if(array.length === 1){
        return array;
    }

    const len = array.length;
    const middle = Math.floor(len/2);
    const left = array.slice(0,middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )

}

function merge(left, right){
    const results = [];
    // if(left.length === 1 && right.length === 1){
    //     if(left[0]>=right[0]){
    //         results[0] = right[0];
    //         results[1] = left[0];
    //     }else{
    //         results[0] = left[0];
    //         results[1] = right[0];
    //     }
    //     return results;
    // }

    i = 0;
    j = 0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            results.push(left[i]);
            i++;
        }
        if(right[j]<left[i]){
            results.push(right[j]);
            j++;
        }
        // if(i<left.length){
        //     results.concat(left.slice(i))
        // }
        // if(j<right.length){
        //     results.concat(right.slice(j))
        // }
    }
    return results.concat(left.slice(i)).concat(right.slice(j));
}

res = mergeSort(arr);
console.log(res);