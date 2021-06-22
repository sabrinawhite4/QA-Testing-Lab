module.exports = {
  returnTwo: () => {
    return 2;
  },
  greeting: (name) => {
    return `Hello, ${name}`;
  },
  add: (num1, num2) => {
    return num1 + num2;
  },
  subtract: (num1, num2) => {
    return num1 - num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
  divide: (num1, num2) => {
    return num1 / num2;
  },
  evenNumber: (num1) => {
    return num1 % 2 === 0;
  },
};
