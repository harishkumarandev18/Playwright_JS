const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
let date = [1,2,3,4,5];

// print entire Array
console.log(weekdays);

// Retrieve using for loop
console.log('--------For Loop---------');
for(const day of weekdays){
    console.log(day);
}

// Retrieve using foreach loop
console.log('---------ForEach Loop----------');
weekdays.forEach((val,index) => {
    console.log(val);
});

// Adding an element using push
console.log('---------Array push---------');
date.push(6);
console.log('Array with newly added element:',date);

// Remove element from Array
console.log('---------Array pop----------');
date.pop();
console.log('Array with removed element:', date);

// Map - Create a new array with doubled values
console.log('---------Array Map----------');
const newArray = date.map(num => num*2);
console.log('After Map:',newArray);

// Filter from the Array
console.log('---------Array Filter-------');
const filData = date.filter(num => num>2);
console.log('After Filter:',filData);