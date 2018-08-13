// let n = Date.now();
// console.log(n);

let arr: number [] = [1,2,3,4];


/**

  @function showArray shows the array on the console log
  @param arr of numbers.
  @returns void

*/

function showArray(arr:number[]): void {
    console.log("Array numbers are:", arr)
        
    };

    showArray(arr);


/**

  @function showArray shows the array on the console log
  @param arr of numbers.
  @returns void

*/

function getSumOfArray(arr: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    console.log("The sum of the array's digits is:", sum);
    return sum;
    
    }
    
    getSumOfArray(arr);

function getAvgOfArray(arr: number[]): number {
    let sum: number = 0;
    let l = arr.length;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    let avg  = sum/l;
    console.log("The average of the array's digits is:", avg);
    return avg;
    
}

    getAvgOfArray(arr);

function getLargestNumber(arr: number[]): number {
    
    let lrgst: number = 0;
    lrgst =  Math.max(...arr);
    console.log("The largest number is:", lrgst);
    return lrgst;

}

getLargestNumber(arr);

function getSmallestNumber(arr: number[]): number {
    let smallest =  Math.min(...arr);
    console.log("The smallest number is:", smallest);
    return smallest;
    
}

getSmallestNumber(arr);

function getIndexofLargestNumber(arr: number[]): number {
    
    let res =  Math.max(...arr);
    let index = arr.indexOf(res);
    console.log("The index of the largest number is:", index);
    return index;
    
}

getIndexofLargestNumber(arr);

function getIndexofSmallestNumber(arr: number[]): number {
    
    let res =  Math.max(...arr);
    let index = arr.indexOf(res);
    console.log("The index of the largest number is:", index);
    return index;
    
}

getIndexofSmallestNumber(arr);

function getSumOfEvenNumbers(arr: number[]){

    let evenNumbersArr: Array<number> = [];

    for (let i = 0; i < arr.length; i++) {
        
        let modulo: number = arr[i]%2;
        if(modulo<1){
            evenNumbersArr.push(arr[i]);
        
        }
    }    
   
    let sum: number = 0;
    for (let i = 0; i < evenNumbersArr.length; i++) {
        sum = sum + evenNumbersArr[i];
    }

    console.log("The sum of the even numbers array is", sum);
    return sum;  
}

getSumOfEvenNumbers(arr);

function getSumOfOddNumbers(arr: number[]){

    let oddNumbersArr: Array<number> = [];

    for (let i = 0; i < arr.length; i++) {
        
        let modulo: number = arr[i]%2;
        if(modulo>0){
            oddNumbersArr.push(arr[i]);
        
        }
    }    

    let sum: number = 0;
    for (let i = 0; i < oddNumbersArr.length; i++) {
        sum = sum + oddNumbersArr[i];
        
    }

    console.log("The sum of the odd numbers array is", sum);
    return sum;
}

getSumOfOddNumbers(arr);

function getSumOfPositivedNumbers(arr: number[]){

    let positiveNumbersArr: Array<number> = [];

    for (let i = 0; i < arr.length; i++) {
        
        // let modulo: number = arr[i];
        if(arr[i]>0){
            positiveNumbersArr.push(arr[i]);
        
        }
    }    

    let sum: number = 0;
    for (let i = 0; i < positiveNumbersArr.length; i++) {
        sum = sum + positiveNumbersArr[i];
        
    }


    console.log("The sum of the positive numbers array is", sum);
    return sum;
}

getSumOfPositivedNumbers(arr);


function getQofZeroNumbers(arr: number[]){

    let zeroNumbersArr: Array<number> = [];

    for (let i = 0; i < arr.length; i++) {
        
        // let modulo: number = arr[i];
        if(arr[i]=0){
            zeroNumbersArr.push(arr[i]);
        
        }
    }    

    let sum: number = 0;
    for (let i = 0; i < zeroNumbersArr.length; i++) {
        sum = sum + zeroNumbersArr[i];
        
    }

    
    console.log("The number of zeros is", sum);
    return sum;
}

getQofZeroNumbers(arr);

