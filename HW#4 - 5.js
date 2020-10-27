https://jsfiddle.net/njahnik/1gabw34L/23/

'use strict'

function stringExpansion(str) {
    const expandedStr = [];
    let multiplier = 1;

    [...str].forEach((char) => {
        if (Number.isNaN(+char)) {
            for (var j = 0; j < multiplier; j++) {
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