https://jsfiddle.net/njahnik/L4ouea8r/18/

'use strict'

const toCamelCase = (str) => {
    return str.split(/[-_]/g).map((word, index) => {
        const firstLetter = word[0].toUpperCase();
        return index > 0 ? word.replace(/^./, firstLetter) : word;
    }).join('');
};

console.log(toCamelCase('the_stealth-Warrior'));