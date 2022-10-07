const numbers = [3,1,9,7,1,2,4];

function CountSort(array){
    // finding the largest number
    largest = null;
    for(i = 0; i<array.length; i++){
        if(array[i]>largest) largest = array[i];
    }

    // creating a new array
    newArr = {};
    for(j=0;j<largest;j++){
        newArr[j] = 0;
    }

    for(k=0;k<array.length;k++){
        variable = array[k];
        newArr[variable] = newArr[variable]+1;
    }

    newArr2 = [];
    for(l=0;l<largest+1;l++){
        x = newArr[l];
        for(m=0;m<x-1;m++){
            newArr2.push(l);
        }
        if(newArr[l]!==0){
            newArr2.push(l);
        }
    }

    return newArr2;
}

const answer = CountSort(numbers);
console.log(numbers);
console.log(answer);