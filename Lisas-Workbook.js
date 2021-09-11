'use strict';

const fs = require('fs');

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

function workbook(n, k, arr) {
    let result = 0;
  let page = 1;

  for (let i of Array.from({ length: n }, (value, index) => index)) {
    const problems = arr[i];

    for (let j of Array.from(
      { length: problems },
      (value, index) => index + 1
    )) {
      j === page && result++;

      j !== problems && !(j % k) && page++;
    }

    page++;
  }

  return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = workbook(n, k, arr);

    ws.write(result + '\n');

    ws.end();
}
