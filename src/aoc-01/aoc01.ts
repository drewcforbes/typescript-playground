// ############################################################################

/**
 * Advent of Code Day 1 #######################################################
 */

import * as fs from 'fs';

const data: string = fs.readFileSync('src/aoc-01/input.txt', 'utf8');
const dataByLine: string[] = data.split('\n');

let sum: bigint = 0n;

for (const entry of dataByLine) {

    const num: number = parseInt(entry, 10);
    sum += bigint(num);

    // const firstChar: string = entry.slice(0, 1);
    // console.log(firstChar);

    // if (firstChar !== '0') {
    //     if (firstChar === '-') {

    //     }
    // }

}
console.log(sum);
// ############################################################################