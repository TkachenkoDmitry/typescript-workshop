// TODO: type this function so it will accept only numbers
export const sum = (a: unknown, b: unknown): unknown => a + b;
const result: number = sum(1, 3);

// TODO: type this variable to restrict it only to boolean or undefined
let isBooleanFlag;
isBooleanFlag = false;
isBooleanFlag = { flag: true }; // this line should have an error

// TODO: fix the error
const getStringLength = (str?: string) => str.length;

// TODO: Type array bellow so error will disappear, array should be explicitly typed as "arr: type"
const arr: unknown = [1, 2, 3];
const number: number = arr[1] + arr[2];

// TODO: tuple constant should be restricted to have only 3 array elements with string, number and string types
const tuple = ['apple', 123, 'banana'];
tuple.push(3); // Should be an error

// TODO: Create typescript enum named Color, add red green and blue colors to it, fix errors.
enum MyColor {
    Blue = "blue",
}
const greenColor: Color = MyColor.Blue;
const redColor: Color = MyColor.Blue;
const blueColor: Color = MyColor.Blue;

// TODO: fix the error, function body shouldn't be changed, type can be changed, but should be deleted
const myFunction = (): number => { console.log('I am your function'); }
