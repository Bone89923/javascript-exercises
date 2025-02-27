const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce(accumulator, currentValue) => accumulator + currentValue,0);
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(num, pwr) {
	for (let i = 0; i < pwr; I++) {
    num *= num;
  );
    return num;
};
  
const factorial = function(a) {
  let total = 1;
	for (let i = a; i == 1 ; i--) {
    total *= i;
  };
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
