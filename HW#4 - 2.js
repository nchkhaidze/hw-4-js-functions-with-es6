https://jsfiddle.net/njahnik/dLmoecn1/11/

'use strict'

const convert = (hash) => {
    return Object.entries(hash);
};

var record = { name: 'Jeremy', age: 24, role: 'Software Engineer' };
console.log(convert(record));