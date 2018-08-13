// let n = Date.now();
// console.log(n);
var arr = [1, 2, 3, 4];
/**

  @function showArray shows the array on the console log
  @param arr of numbers.
  @returns void

*/
function showArray(arr) {
    console.log("Array numbers are:", arr);
}
;
showArray(arr);
/**

  @function showArray shows the array on the console log
  @param arr of numbers.
  @returns void

*/
function getSumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log("The sum of the array's digits is:", sum);
    return sum;
}
getSumOfArray(arr);
function getAvgOfArray(arr) {
    var sum = 0;
    var l = arr.length;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    var avg = sum / l;
    console.log("The average of the array's digits is:", avg);
    return avg;
}
getAvgOfArray(arr);
function getLargestNumber(arr) {
    var lrgst = 0;
    lrgst = Math.max.apply(Math, arr);
    console.log("The largest number is:", lrgst);
    return lrgst;
}
getLargestNumber(arr);
function getSmallestNumber(arr) {
    var smallest = Math.min.apply(Math, arr);
    console.log("The smallest number is:", smallest);
    return smallest;
}
getSmallestNumber(arr);
function getIndexofLargestNumber(arr) {
    var res = Math.max.apply(Math, arr);
    var index = arr.indexOf(res);
    console.log("The index of the largest number is:", index);
    return index;
}
getIndexofLargestNumber(arr);
function getIndexofSmallestNumber(arr) {
    var res = Math.max.apply(Math, arr);
    var index = arr.indexOf(res);
    console.log("The index of the largest number is:", index);
    return index;
}
getIndexofSmallestNumber(arr);
function getSumOfEvenNumbers(arr) {
    var evenNumbersArr = [];
    for (var i = 0; i < arr.length; i++) {
        var modulo = arr[i] % 2;
        if (modulo < 1) {
            evenNumbersArr.push(arr[i]);
        }
    }
    var sum = 0;
    for (var i = 0; i < evenNumbersArr.length; i++) {
        sum = sum + evenNumbersArr[i];
    }
    console.log("The sum of the even numbers array is", sum);
    return sum;
}
getSumOfEvenNumbers(arr);
function getSumOfOddNumbers(arr) {
    var oddNumbersArr = [];
    for (var i = 0; i < arr.length; i++) {
        var modulo = arr[i] % 2;
        if (modulo > 0) {
            oddNumbersArr.push(arr[i]);
        }
    }
    var sum = 0;
    for (var i = 0; i < oddNumbersArr.length; i++) {
        sum = sum + oddNumbersArr[i];
    }
    console.log("The sum of the odd numbers array is", sum);
    return sum;
}
getSumOfOddNumbers(arr);
function getSumOfPositivedNumbers(arr) {
    var positiveNumbersArr = [];
    for (var i = 0; i < arr.length; i++) {
        // let modulo: number = arr[i];
        if (arr[i] > 0) {
            positiveNumbersArr.push(arr[i]);
        }
    }
    var sum = 0;
    for (var i = 0; i < positiveNumbersArr.length; i++) {
        sum = sum + positiveNumbersArr[i];
    }
    console.log("The sum of the positive numbers array is", sum);
    return sum;
}
getSumOfPositivedNumbers(arr);
function getQofZeroNumbers(arr) {
    var zeroNumbersArr = [];
    for (var i = 0; i < arr.length; i++) {
        // let modulo: number = arr[i];
        if (arr[i] = 0) {
            zeroNumbersArr.push(arr[i]);
        }
    }
    var sum = 0;
    for (var i = 0; i < zeroNumbersArr.length; i++) {
        sum = sum + zeroNumbersArr[i];
    }
    console.log("The number of zeros is", sum);
    return sum;
}
getQofZeroNumbers(arr);
