const person = {
  name: 'Sid',
  age: 24,
  location: {
    place: 'london',
    temp: 23,
  },
};

const { name: firstName = 'Anonymous', age } = person;

const { place, temp: tem } = person.location;

console.log(`hi am ${firstName}`);
console.log(`the temperature is ${tem}`);

const book = {
  title: 'ego is the enemy',
  author: 'Ryan holiday',
  publisher: {
    name: 'penguin',
  },
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

const address = ['Gillett Road', 'Poole', 'Dorset', 'BH12 5BF', 'GB'];

const [street, , , post = 'bh12'] = address;

console.log(`I live in ${post}`);

const item = ['Coffee(Hot)', '$3.00', '$3.50', '$3.75'];

const [i = 'coffee', , med] = item;

console.log(`${i} ${med}`);
