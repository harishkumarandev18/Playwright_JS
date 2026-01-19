console.log('kumaran success');

// Reference variables
// Object
let person = {
    name: 'Kumaran',
    salary: 2500000
};

person.name = 'Harish Kumaran';
console.log(person);

// Arrays
let colours = ['Red','Green'];
colours[2] = 'Yellow';
colours[3] = 22;
console.log(typeof colours);
console.log(colours);

// Function
function statusRes(name, result){
    console.log('The status of',name, 'is:',result);
}
statusRes('Kumaran','pass');

// For Loop
for(let i=0; i<=5; i++){
    console.log('value',i);
}