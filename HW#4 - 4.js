https://jsfiddle.net/njahnik/qzpcxve7/6/

'use strict'

const reverse = (str) => {
    return str.split(' ').map((word) => {
        return word.split('').reverse().join('');
    }).join(' ');
}

console.log(reverse('A fun little challenge!'));