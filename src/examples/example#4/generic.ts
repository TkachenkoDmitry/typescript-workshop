import { get } from 'lodash/fp';

// TODO: Let's type our own get fucntion using generics
const customGet = (obj, key)  => obj[key];

const person = {
    name: 'John',
}

customGet(person, 'John'); // should show ts error
customGet(person, 'name'); // should work fine


// TODO: 
interface Persons {
    [key: string]
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

const persons: Persons<Person> = {
    john,
    max,
    evilMaxClone // this should throw error
}

const evilPersons: Persons<EvilPerson> = {
    evilMaxClone,
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
    notId: 'I am fake',
};

getImageDescription(imageItem);
getImageDescription(fakeImageItem); // here should be ts error
