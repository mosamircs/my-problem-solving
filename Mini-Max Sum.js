'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    var sum1=undefined;
    var sum2=undefined;
    var sum3=undefined;
    var sum4=undefined;
    var sum5=undefined;
    var maximum = undefined;
    var minimum = undefined;
    for(let i=0;i<arr.length;i++){
        sum1=arr[0]+arr[1]+arr[2]+arr[3];
        sum2=arr[1]+arr[2]+arr[3]+arr[4];
        sum3=arr[0]+arr[1]+arr[2]+arr[4];
        sum4=arr[2]+arr[3]+arr[4]+arr[0];
        sum5=arr[0]+arr[1]+arr[3]+arr[4];
    }
    maximum=Math.max(sum1,sum2,sum3,sum4,sum5);
    minimum=Math.min(sum1,sum2,sum3,sum4,sum5);
    console.log(minimum+" "+maximum);
} 

   
function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
