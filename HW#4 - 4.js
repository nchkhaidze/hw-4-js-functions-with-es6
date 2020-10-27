https://jsfiddle.net/njahnik/qzpcxve7/3/

'use strict'

function reverse(str) {
    let newStr = str.split(' ');

    newStr = newStr.map((word) => {
        return word.split('').reverse().join('');
    });

    newStr = newStr.join(' ');

    return newStr;
}

console.log(reverse('A fun little challenge!'));