const fullName = require('./names.js')
const getHobbies = require('./hobbies.js')

console.log(fullName("John", "Mayer"))
console.log(getHobbies("Playing Guitar", "Fishing", "Cooking"));



function personInfo() {

    const name = fullName('John', 'Mayer');
  
    const hobbies = getHobbies('Playing', 'Fishing', 'Cooking');
  
    const info = { name, hobbies };
  
    return info;
  
  }


const person = personInfo();
console.log(person);