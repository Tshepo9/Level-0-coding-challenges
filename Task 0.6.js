function maximum(...arguments) {
  let max = 0;
  // check for max number
  for (let x = 0; x < arguments.length; x++) {
    if (arguments[x] >= max) {
      max = arguments[x];
    }
  }

  return max;
}

console.log("maximum: " + maximum(1, 95, 90, 56, 43, 6, 7, 8, 22, 3, 2));
