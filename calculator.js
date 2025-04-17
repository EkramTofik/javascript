const calculator = function (number1, number2, operator) {
  if (
    operator !== '+' &&
    operator !== '-' &&
    operator !== '*' &&
    operator !== '/'
  ){
    return 'invalid operator';}
  if (operator === '+') {
    return number1 + number2;
  } else if (operator === '-') {
    return number1 - number2;
  } else if (operator === '*') {
    return number1 * number2;
  } else if (operator === '/') {
    return number1 / number2;
  } else {
    return NaN;
  }
};
console.log(calculator(2, 1, '^'));
