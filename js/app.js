console.log("Javascript is linked");

//HW 4

//Conceptual Questions
/*
1. We assign a value to a variable by declaring the variable and using the = operator to assing a value to the variable.


2. We can change the value of a varible by again calling the variable and using the = opperator to assign a new value to the variable.


3. We can assign an existing variable to a new variable by the same structure as before. We declare the new variable and use the = operator to store the value of the existing variable to the new variable.
*/


//Strings

//1.
let firstVariable = "Hello World";

firstVariable = 5;

let secondVariable = firstVariable;

secondVariable = "Changed value to a string";

//2.
const yourName = "Fred";

console.log(`Hello, my name is ${yourName}.`);


//Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
console.log(a + b === c);
console.log(a * a === d);
console.log(e === "Kevin");
console.log(48 == "48");


//The Farm
const animal = "something";

if(animal === "cow") {
	console.log("moooooo");
} else {
	console.log("Hey! You're not a cow.");
}


//Driver's Ed
const age = 12;

if(age >= 16) {
	console.log("Here are the keys.");
} else {
	console.log("Sorry, you're too young");
}

//Just Loop It
for(let i = 0; i <= 10; i++) {
	console.log(i);
}

for(let i = 10; i <= 4000; i++) {
	console.log(i);
}

for(let i = 0; i <= 4000; i += 2) {
	console.log(i);
}

//Let's Get Even
for(let i = 1; i <= 100; i++) {
	if(i % 2 === 0){
		console.log(`${i} is an even number.`);
	 }
}


//Give me Five
for(let i = 1; i <= 100; i++) {
 	if (i % 5 === 0) {
 		console.log(`I found a ${i}. High Five!`);
 	} 
 	if (i % 3 === 0) {
 		console.log(`I found a ${i}. Three is a crowd.`)
 	}
 }


//Savings Account
let bankAcc = 0;

for (let i = 0; i <= 10; i++) {
	bankAcc = bankAcc + i;
}

console.log(bankAcc);

let bankAcc2 = 0;

for (let i = 0; i <= 100; i++) {
	bankAcc2 = bankAcc2 + i * 2;
}

console.log(bankAcc2);

//Multiples of 3 and 5
let multiplesSum = 0;

for (let i = 0; i < 1000; i++) {
	if(i % 5 === 0 || i % 3 === 0) {
		multiplesSum = multiplesSum + i;
	}
}

console.log(multiplesSum);


//Easy Does It
const quotes = [
	"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", 
	"If you’re changing the world, you’re working on important things. You’re excited to get up in the morning.", 
	"Being ignorant is not so much a shame as being unwilling to learn."
]


//Random
const randomThings = [1, 10, "Hello", true]

console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings[2]);

//We've Got Class
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];

console.log(ourClass[2]);
ourClass[2] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

//Mix It Up
const myArray = [5 ,10 ,500, 20];
myArray.push("Egon");
myArray.pop();
myArray.unshift("Bob Marley");
myArray.shift();
myArray.reverse();
console.log(myArray);


//Biggie Smalls
const randNumber = 22;
if (randNumber < 100) {
	console.log('little number');
} else {
	alert('big number');
}


//Monkey in the Middle
if(randNumber < 5) {
	console.log('little number');
} else if(randNumber > 10) {
	console.log('big number')
} else {
	console.log('monkey')
}


//What's in your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

const kristynShoe = kristynsCloset.shift();
kristynsCloset.splice(5, 0, 'raybans');
kristynsCloset[4] = 'stained knit hat';

console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][2]}.`);
thomsCloset[1][2] = 'Footie Pajamas';


//Functions
//printGreeting
const name = 'Slimer';
const printGreeting = (name) => {
	return `Hello there, ${name}!`
}

console.log(printGreeting(name));


//Reverse Word Order
const reverseWordOrder = (input) => {
	const splitString = input.split(' ');
	// console.log(splitString);
	const reversedArray = splitString.reverse();
	// console.log(reversedArray);
	return reversedArray.join(' ');
}

console.log(reverseWordOrder("Ishmael me Call"))


//Calculates two input numbers based on an input operation
const calculate = (num1, num2, operation) => {
	if (operation === 'add') {
		return num1 + num2
	} else if (operation === 'sub') {
		return num1 - num2
	} else if (operation === 'mult') {
		return num1 * num2
	} else if (operation === 'div') {
		return num1 / num2 
	} else if (operation === 'exp') {
		return Math.pow(num1, num2)
	} 
}

console.log(calculate(4, 3, "exp"));

//1 - printCool
const printCool = (name) => {
	return `${name} is cool!`
}

console.log(printCool('Captain American'));

//2 - calculateCube
const calculateCube = (num) => {
	return Math.pow(num, 3);
}
 
console.log(calculateCube(5));

//3 - isAVovel
const isAVowel = (char) => {
	const lowerChar = char.toLowerCase();
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	for(let i = 0; i < vowels.length; i++) {
		if(lowerChar === vowels[i]) {
			return true
		}
	}
	return false
}

console.log(isAVowel('A'));


//4 - getTwoLengths
const getMultipleLengths = (arrOfStrings) => {
	let strLength = [];
	for(let i = 0; i < arrOfStrings.length; i++) {
		strLength[i] = arrOfStrings[i].length;
	}
	return strLength
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


//6 - maxOfThree

const maxOfThree = (num1, num2, num3) => {
	let maxNum;
	if(num1 > num2) { 
		maxNum = num1;
	} else { 
		maxNum = num2;
	}
	if(num3 > maxNum) { 
		maxNum = num3;
	}
	return maxNum;
}

console.log(maxOfThree(16, 9, 1));


//7 - printLongestWord
const printLongestWord = (arrOfStrings) => {
	let maxLength = '';
	for(let i = 0; i < arrOfStrings.length; i++) {
		if(arrOfStrings[i].length > maxLength.length){
			maxLength = arrOfStrings[i];
		}
	}
	return maxLength
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


//8 - transmogrify
const transmogrify = (num1, num2, num3) => {
	const product = num1 * num2;
	return Math.pow(product, num3)
}

console.log(transmogrify(5, 3, 2));


//Objects
//Syntax

/*
const/var/let are used to start the object declaration
"object name" is how we will call the object
= is used to set the intial object value
{} are used to "house" the values that go inside of the object
"key names" are how we will access certain aspects of the objects
: is used to separate the key name from the value stored at the key
"value" this is what will be accessed when we call the object and key name
*/


//Declaring object "me"
const me = {};

me.name = 'Luke';
me.age = 38;
me.email = 'luke123@gmail.com';

console.log(me);
console.log(me.name);
me.age = 1000;
console.log(me.age);
me['place of residence'] = 'Chicago, IL';
console.log(me['place of residence']);


//Slimer
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(monster.name);
monster.type = 'creature';
monster.age = 6;
console.log(monster.age)


//Ogre Hero Battle

//Make an object called hero
adventurer = {
	name: 'Kristoff',
	type: 'Ranger',
	hitPoints: 100,
	dps: 15,
	weapon: 'Bow',
	armorType: 'Light'
}
//Make an object called ogre
ogre = {
	hitPoints: 300,
	dps: 4,
	armorType: 'None' 
}

//simulate a battle between the hero and monster
//Compare time it takes for hero to kill monster vs monster to kill hero
const simulateBattle = (hero, monster) => {
	//checking the time to kill both the hero and monster based on the other's dps
	const timeToDeathHero = hero.hitPoints / monster.dps;
	const timeToDeathMonster = monster.hitPoints / hero.dps;

	//Logging both character's hitpoints and dps
	console.log(`The hero has ${hero.hitPoints} hitpoints and ${hero.dps} damage per second`);
	console.log(`The monster has ${monster.hitPoints} hitpoints and ${monster.dps} damage per second`);

	//calculating the health remaining after the battle for both characters
	const heroHealthRemaining = hero.hitPoints - (timeToDeathMonster * monster.dps);
	const monsterHealthRemaining = monster.hitPoints - (timeToDeathHero * hero.dps);

	//comparing both time to deaths to see who won the battle
	if ( timeToDeathMonster > timeToDeathHero ) {
		console.log(`${hero.name} has died.`);
		console.log(`The Monster has ${monsterHealthRemaining} HP left.`);
		return false
	} else {
		console.log(`Congratulations, ${hero.name} has defeated the Monster.`);
		console.log(`${hero.name} has ${heroHealthRemaining} HP left.`);
		return true
	}
}

simulateBattle(adventurer, ogre);




//Extra Stuff

const cat1 = {
	name: 'Garfield',
	breed: 'Exotic Shorthair',
	age: 7
}


console.log(cat1.age);
console.log(cat1.breed);


const cat2 = {
	name: 'Tigger',
	breed: 'Tiger',
	age: 10
}


const combineCats = (mama, papa) => {
	const newCat = {};
	newCat.name = (papa.name + mama.name);
	newCat.age = 1;
	newCat.breed = (papa.breed + '-' + mama.breed);
	return newCat
}	


console.log(combineCats(cat1, cat2));


console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));




