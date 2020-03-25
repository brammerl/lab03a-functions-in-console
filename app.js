console.log('Hello World');
document.body.style.color = 'orange';


const monty = {
    name: 'monty',
    species: 'cat',
    color: 'grey-white',
    age: .5,
    rescue: true,
    owner: 'lucia'
};

const cheese = {
    name: 'cheese',
    species: 'cat',
    color: 'orange-white',
    age: .5,
    rescue: false,
    owner: 'nicole'
};

const lucy = {
    name: 'lucy',
    species: 'cat',
    color: 'grey-white',
    age: 2,
    rescue: true,
    owner: 'gail'
};

const pixis ={
    name: 'pixis',
    species: 'dog',
    color: 'tan',
    age: 10,
    rescue: true,
    owner: 'gail',
    
};

const bella = {
    name: 'pixis',
    species: 'dog',
    color: 'tan',
    age: 10,
    rescue: false,
    owner: 'gail'
};

const pets = [monty, cheese, lucy, pixis, bella]; 


function logOutThings(array) {
    console.log('Here are your ', array.length, ' things!');
    let i = 0;
    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        if(array[i].rescue === true){
            console.log('Rescue Animal', item)
        } else {
            console.log('Not Rescue Animal', item)
        };
    };
};
 
logOutThings(pets);
