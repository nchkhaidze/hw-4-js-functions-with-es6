https://jsfiddle.net/njahnik/c9731Lqe/14/

'use strict'

function splitAndMerge(str, sp) {
    return str.split(' ').map((word) => {
        return word.split('').join(sp);
    }).join(' ');
}

console.log(splitAndMerge("Hello World!", ","));