const { expect, test, describe } = require("@jest/globals");
const {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide,
  evenNumber,
} = require("./functions");

test("returnTwo function should return 2", () => {
  expect(returnTwo()).toBe(2);
});

describe("greeting functions should greet James and Jill", () => {
  test("greeting functions should greet James", () => {
    expect(greeting("James")).toContain("Hello, James");
  });

  test("greeting functions should greet Jill", () => {
    expect(greeting("Jill")).toContain("Hello, Jill");
  });
});

describe("Math functions", () => {
  test("add function should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 9)).toBe(14);
  });

  test("subtract function should return a number", () => {
    expect(subtract(25, 13)).toBe(12);
    expect(subtract(12, 3)).toBe(9);
  });

  test("multiply function should multiply two nnumbers", () => {
    expect(multiply(9, 8)).toBe(72);
    expect(multiply(5, 10)).toBe(50);
  });

  test("divide function should return a number", () => {
    expect(divide(58, 2)).toBe(29);
    expect(divide(500, 5)).toBe(100);
  });
});

test("function should return whether or not number is even", () => {
  expect(evenNumber(2)).toBeTruthy();
});
