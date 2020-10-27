https://jsfiddle.net/njahnik/dLmoecn1/10/

'use strict'

function convert(hash) {
    return Object.entries(hash);
}

var record = { name: 'Jeremy', age: 24, role: 'Software Engineer' };
console.log(convert(record));