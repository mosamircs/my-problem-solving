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

function timeConversion(s) {
    var hourString=s.substr(0,2);
    var AMPM = s.charAt(8);
    var militaryHour="";
    if(AMPM=="A"){
        if(s.substr(0,2)=="12"){
            militaryHour="00";
        }else {
            militaryHour=s.substring(0,2);
        }
        
    }else{
        if(hourString=="12"){
            militaryHour=s.substr(0,2);
        }
        else {
            militaryHour=parseInt(s.substr(0,2),10)+12;
        }
    }
    return militaryHour+s.substring(2,8);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
