https://jsfiddle.net/njahnik/c9731Lqe/31/

'use strict'

const splitAndMerge = (str, sp) => {
    return str.split('').join(sp).split(`${sp} ${sp}`).join(" ");
};

console.log(splitAndMerge("My name is John", " "));
