https://jsfiddle.net/njahnik/bvpu4fzn/

function largest() {
    return Math.max(...arguments);
}

function smallest() {
    return Math.min(...arguments);
}

console.log(largest(2, -1, 100, 500, 50));
console.log(smallest(2, 0.1));