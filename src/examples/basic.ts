// TODO: type this function so it will accept only numbers
export const sum = (a: unknown, b: unknown): unknown => a + b;
const result: number = sum(1, 3);

// TODO: type this variable to restrict it only to boolean or undefined
let isBooleanFlag;
isBooleanFlag = false;
isBooleanFlag = { flag: true };

// TODO: fix the error
const getStringLength = (str?: string) => str.length;

// TODO: Use type casting or type assertion to execute the code below
var foo = {};
foo.name = 'John';
foo.surname = 'smith';
