https://jsfiddle.net/njahnik/vLw3ejbs/3/

function sum(...rest) {
  if (rest.length === 1) {
    return rest[0];
  }

  return rest[0] + sum(...rest.slice(1));
}

console.log(sum(100, 50, 25));