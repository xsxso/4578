// let n = Date.now();
// console.log(n);
var arr = new Array(20);
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 202,];
function getLargestNumber(arr) {
    var lrgst = 0;
    lrgst = Math.max.apply(Math, arr);
    console.log("The largest number is :", lrgst);
    var a = lrgst.toString().length;
    console.log("The number of digits in the largest number is:", a);
    return a;
}
getLargestNumber(arr);
