import { get } from 'lodash/fp';

// TODO: Let's type our own get function using generics
const customGet = (obj, key)  => obj[key];

const person = {
    name: 'John',
}

customGet(person, 'John'); // should show ts error
customGet(person, 'name'); // should work fine


// TODO: Type Persons interface accordingly, so comments below will be actually true
interface Persons {

}

interface Person {
    name: string;
}

const john: Person = {
    name: 'John',
}

const max: Person = {
    name: 'Max',
}

interface EvilPerson {
    evilName: string; 
}

const evilMaxClone = {
    evilName: 'EvilMax',
}

const persons: Persons = {
    john,
    max,
    evilMaxClone // this should throw error
}

const evilPersons: Persons = {
    evilMaxClone, // this should be okay
}

// TODO: type lodash get correctly 
interface ImageItem {
    id: string;
    description: string;
}

const getImageDescription = get('description');

const imageItem: ImageItem = {
    id: 'asd',
    description: 'asd',
};

const fakeImageItem = {
    notId: 'I am a fake',
};

getImageDescription(imageItem);
getImageDescription(fakeImageItem); // here should be ts error
