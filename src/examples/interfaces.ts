// TODO: Correctly type Person interface 
interface Person {

}

const getFullName = ({ name, lastName }: Person) => `${name} ${lastName}`;

getFullName({ name: 'John', lastName: 'Smith' });


// TODO: Correctly type PersonWithMiddleName. Pay attention that middleName is not required
// DO NOT REDEFINE PERSON TYPES AGAIN, use inheritance
interface PersonWithMiddleName {

}

const getPersonFullName = ({ name, lastName, middleName}: PersonWithMiddleName) => (middleName 
    ? `${getFullName({ name, lastName})} ${middleName}` 
    : `${getFullName({ name, lastName})}`);

getPersonFullName({ name: 'John', lastName: 'Smith', middleName: undefined });


// TODO: define Persons interface reusing interfaces from before and do that in single line
interface Persons {

}
const mapOfPersons: Persons = {
    '1': {
        name: 'John',
        lastName: 'Smith',
        middleName: 'Andrejevich'
    },
    '2': {
        name: 'Pavel',
        lastName: 'Ivanov',
        middleName: 'Kirillovich'
    },
    '3': {
        name: 'Trump',
        lastName: 'Trump',
        middleName: 'Trumpovich'
    }
}
