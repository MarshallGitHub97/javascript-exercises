const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach((element) => sum += element)
  return sum
};

const multiply = function(arr) {
  let sum = 1;
  arr.forEach((element) => sum = sum * element)
  return sum
};

const power = function(a, b) {
  let power = 1
  for (let i = 1; i <= b; i++) {
    power = power * a
  }
  return power;
};

const factorial = function(a) {
	let factorial = 1;
  for(let i = 1; i < a; i++) {
    factorial = factorial * (i + 1) 
  }
  return factorial;
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
