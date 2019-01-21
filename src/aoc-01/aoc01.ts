// ############################################################################

/**
 * Advent of Code Day 1 #######################################################
 */

import * as fs from 'fs';

const data: string = fs.readFileSync('src/aoc-01/input.txt', 'utf8');
const dataByLine: string[] = data.split('\n');

// let sum: bigint = 0n;
let sum = 0;

for (const entry of dataByLine) {

    // const num: number = parseInt(entry, 10);
    // sum += bigint(num);
    const num: number = parseInt(entry, 10);
    sum += num;
    console.log('num ' + num + '   sum ' + sum);

    // const firstChar: string = entry.slice(0, 1);
    // console.log(firstChar);

    // if (firstChar !== '0') {
    //     if (firstChar === '-') {

    //     }
    // }

}
console.log(sum);
// ############################################################################
