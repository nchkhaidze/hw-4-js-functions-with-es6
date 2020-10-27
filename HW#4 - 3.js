https://jsfiddle.net/njahnik/L4ouea8r/14/

'use strict'

function toCamelCase(str) {

    let newStr = str.split(/[-_]/g);

    newStr = newStr.map((word, index) => {
        const firstLetter = word[0].toUpperCase();
        return index > 0 ? word.replace(/^./, firstLetter) : word;
    });

    newStr = newStr.join('');

    return newStr;
}

console.log(toCamelCase('the_stealth_Warrior'));