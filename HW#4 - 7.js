https://jsfiddle.net/njahnik/2e8ra4oj/8/

'use strict'

function transform(arr) {
    return arr.map((element) => {
        const closure = (number) => {
            return () => {
                return number;
            }
        }
        return closure(element);
    });
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray);
console.log(newArray[0]());
