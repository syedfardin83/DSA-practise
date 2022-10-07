const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array){
    if(array.length === 1){
        return array;
    }

    const len = array.length;
    const middle = Math.floor(len/2);
    const left = array.slice(0,middle);
    const right = array.slice(middle);

    return(merge(
        mergeSort(left),
        mergeSort(right)
    ));
}

function merge(left, right){
    const result = [];
    i = 0;
    j = 0;

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }
        if(right[j]<left[i]){
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i).concat(right.slice(j)));
}

const answer = mergeSort(numbers);
console.log(answer);