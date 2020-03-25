console.log('Hello World');
document.body.style.color = 'orange';

const monty = {
    species: 'cat',
    color: 'grey-white',
    age: '6 months',
    rescue: true,
    owner: 'lucia'
};

const cheese = {
    species: 'cat',
    color: 'orange-white',
    age: '7 months',
    rescue: true,
    owner: 'nicole'
};

const lucy = {
    species: 'cat',
    color: 'grey-white',
    age: '2 years',
    rescue: true,
    owner: 'gail'

};

const pixis = {
    species: 'dog',
    color: 'tan',
    age: '10 years',
    rescue: true,
    owner: 'gail'
};

const bella = {
    species: 'dog',
    color: 'tan',
    age: '8 years',
    rescue: true,
    owner: 'gail'
};

const pets = [monty, cheese, lucy, pixis, bella];

for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
};

