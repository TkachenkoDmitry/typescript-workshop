// TODO Type function using type alias
export const sum = (a, b) => a + b;
const result: number = sum(1, 3);

// TODO: Create and type Person as type alias. Do not use interface 
const getFullName = ({ name, lastName }: Person) => `${name} ${lastName}`;

getFullName({ name: 'John', lastName: 'Smith' });

// TODO: Create and type PersonWithAge as type alias. Type it so there will no errors.
// Reuse name and last name from Person type without redefining it
const getFullName2 = ({ name, lastName, age }: PersonWithAge) => `${name} ${lastName} is ${age} years old`;

// TODO: In the next function both argument can be both string and number. Type it corretly
const concatenateValues = (val1, val2) => `${val1}${val2}`;
const num = 1;
const str = 'string';
concatenateValues(num, str);
concatenateValues(str, num); // Both functions should not cause typescript error
