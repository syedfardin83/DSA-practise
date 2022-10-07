const numbers = [16,11,35,54,15,34];

function radixSort(array){
    for(i=0;i<array.length;i++){
        array[i] = array[i].toString();
    }

    // for units place
    newArr = [];
    largest = parseInt(array[0][0]);
    for(i = 1; i<array.length; i++){
        for(j = 1; j<array.length; j++){
            current = parseInt(array[i][0]);
            if(current>largest) largest = current;
        }
        newArr.push(largest);
        delete array.indexOf(largest.toString());
    }

    return newArr;
}

const answer = radixSort(numbers);
console.log(answer);