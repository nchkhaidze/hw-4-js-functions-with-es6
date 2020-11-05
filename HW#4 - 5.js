https://jsfiddle.net/njahnik/1gabw34L/26/

'use strict'

const stringExpansion = (str) => {

    const expandedStr = [];
    let multiplier = 1;

    [...str].forEach((char) => {
        if (Number.isNaN(+char)) {
            for (let j = 0; j < multiplier; j++) {
                expandedStr.push(char);
            }
            multiplier = 1;
        } else {
            multiplier = +char;
        }
    });

    return expandedStr.join('');
}

console.log(stringExpansion('3d1f25a'));