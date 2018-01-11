// Some data we work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, // Object
    { first: 'Isaac', last: 'Netwon', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564 , passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1638 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// Array.prototype.filter()
 // 1. Filter the list of inventors for those who were born in the 1500's

 const fifteen = inventors.filter(function(inventor) {
     if (inventor.year >= 1500 && inventor.year < 1600) {
         return true; // keep it ! 
     }
 });
 console.table(fifteen);

 //ECMA6

 const fifteenECMA = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteenECMA);

// Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names

 const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
 console.log(fullNames);

 // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
const sorted = inventors.sort(function (a, b) {
    if (a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
});
console.table(sorted);
// Ternary operator
const sortedTernary = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(sortedTernary);

// Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(totalYears);

// 5. Sort the inventors by years lived
const sortedbyLived = inventors.sort((a, b) => a.passed - a.year > b.passed - b.year ? 1 : -1);
console.table(sortedbyLived)
// Wes Bos version 

const oldest = inventors.sort(function(a,b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    return lastGuy > nextGuy ? 1 : -1;
})
console.table(oldest);

 // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const category = document.querySelector(".mw-category");

    // const links = Array.from(category.querySelectorAll("a"));
    // const de = links.map(link => link.textContent);
    // const deFiltered = de.filter(streetName => streetName.includes('de'));

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');

        return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transportation = data.reduce((obj, item) => {
        
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {});
console.log(transportation);

// 9. Filter Exrrcise
// Find even number
 const numbers = [1,12,4,18,9,7,11,3,101,5,6];

 const evenNumbers = numbers.filter(number => number % 2 == 0);
 console.log("Even numbers: " + evenNumbers);

 const oddNumbers = numbers.filter(number => number % 2 !== 0);
 console.log("Odd numbers: " + oddNumbers);

 // 9. Filter Exercise:
 // Find words that include "is"

 const strings = ['this','is','a','collection','of','words'];

 const isIncluded = strings.filter(word => word.indexOf('is') >= 0);
 console.log(isIncluded);

 // 10. Filter Exercise:
 //Filter out all values that are greater than 5 

 const greaterThanFive = numbers.filter(number => number > 5);
 console.log(greaterThanFive);

 //11. Filter Exercise:
 // Filter name of inventors that include "an"

 const eiIncluede = inventors.filter(word => word.first.indexOf('an') >= 0 || word.last.indexOf('an') >= 0 );
 console.log(eiIncluede);

 //12. Map Exercise : 
 // Double numbers array :
 const dubbled = numbers.map(x => x * 2);
 console.log(dubbled);
 //13. Map Exercise :
 // Make numbers strings:

const stringNumbers = numbers.map(number => number.toString());
console.log(stringNumbers);

// 14. Map Exercise : 
// Give array of inventors first names
const firstName = inventors.map(name => name.first);
console.log(firstName);

//15. Reduce Exercise :
// Sum up all numbers
const sumNumbers = numbers.reduce((total, x) => total += x);
console.log(sumNumbers);

// Multiply all numbers
const multipledNumbers = numbers.reduce((total, number) => total *= number);
console.log(multipledNumbers);

// Sort numbers up:
const sortUp = numbers.sort((a, b) => a - b)
console.log(sortUp);

// Sort numbers down : 
const sortDown = numbers.sort((a, b) => b - a);
console.log(sortDown);

//
const sortedByLength = strings.sort((a, b) => a.length > b.length ? 1 : -1);
console.log(sortedByLength);

//Array cardio day2 ! 

const people2 = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
    const isAdult = people2.some(person => (new Date()).getFullYear()- person.year >= 19);
    console.log({isAdult});

  // Array.prototype.every() // is everyone 19 or older?
  const allAdults = people2.every(person => (new Date()).getFullYear()- person.year >= 19);
  console.log({allAdults});
  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const comment = comments.find(comment => comment.id === 823423);
  console.log(comment);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423

  const index = comments.findIndex(comment => comment.id === 823423);
  console.log(index);
  comments.splice(index, 1);

  // Key Detection 

  const pressed = [];
  const secretCode = 'karolinka';

  window.addEventListener('keyup', (e) => {
      pressed.push(e.key)
      console.log(e.key);
      console.log(pressed);
      pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
      if (pressed.join('').includes(secretCode)) {
          console.log('DING DING !!!');
          cornify_add();
      }
  }); 




