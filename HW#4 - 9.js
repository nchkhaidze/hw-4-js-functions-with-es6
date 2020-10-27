https://jsfiddle.net/njahnik/q2ou41ae/7/

'use strict'

function countdown(sec) {
  let i = sec;

  const timer = setInterval(() => {
  	console.log(i--);
  }, 1000);

  // taking extra second to correct for 0
  setTimeout(() => {
  	clearInterval(timer);
  }, 1000 * sec + 1000);
}

countdown(3);