// Unit 2 Assessment: objects.js

// Given an array of objects representing people, return a new array of just
// their full (first name and last name) names.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
const people=[
    { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
    { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
    { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' },
    { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
  ];


//   => ['Gale Dekarios', 'Wyll Ravengard', 'Karlach Cliffgate'];

function getNames(people) {
  return people.map(person => `${person.firstName} ${person.lastName}`);
}
const fullNames = getNames(people);
console.log(fullNames);

// Given an object representing a person, return their full name (first name and last name).
// You MUST use object destructuring in your solution.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getName({ firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' });
//   => 'Gale Dekarios'
function getNameUsingDestructuring(person) { return `${person.firstName} ${person.lastName}`;}
// Example usage
const individual = { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' }; 
const fullName = getNameUsingDestructuring(individual);
console.log(fullName); // This will print 'Gale Dekarios' to the console

// Given an array of objects representing people, return a new array of the
// people matching the given location.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getPeopleByLocation([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ], "Baldur's Gate");
//   => [
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ];
function getPeopleByLocation(people, location) {
  return people.filter (person => person.location === location); 
  }
//ex
const location = "Baldur's Gate";
const peopleInLocation = getPeopleByLocation (people, location);
console.log(peopleInLocation);

// Translate a phrase to pirate talk.
//
// Given an English phrase, use the EN_PIRATE_LOOKUP object to translate words
// to pirate talk. Words that aren't listed in the lookup object should not be
// translated and should pass through unchanged.
//
// The given phrase will be normalized so it'll never contain punctuation and
// will only consist of lowercased letters.
//
// Ex.:
//   translateToPirateTalk('excuse me sir where is the restroom');
//   => 'avast me matey where be the head'
const EN_PIRATE_LOOKUP = {
  excuse: 'avast',
  sir: 'matey',
  is: 'be',
  restroom: 'head',
  student: 'swabbie',
  friend: 'matey',
  restaurant: 'galley',
  your: 'yer',
  are: 'be',
  my: 'me',
  hotel: 'fleabag inn',
  hello: 'ahoy',
};

function translateToPirateTalk(phrase) {
  const words = phrase.split(' ');
  const translatedPhrase = words.map(word => 
    {if(EN_PIRATE_LOOKUP[word]) {
      return EN_PIRATE_LOOKUP[word];
     }else {
      return word;
     }
    }).join(' ');

    return translatedPhrase;
}

// Example usage
const inputPhrase = 'excuse me sir where is the restroom';
const translatedPhrase = translateToPirateTalk(inputPhrase);
console.log(translatedPhrase); // This will log 'avast me matey where be the head'



// Return the number of occurrences of each word in a string.
// This function doesn't handle punctuation and is case-sensitive, so you can
// count 'hello!', 'hello', and 'Hello' as different words.
//
// Ex.:
//   wordCount('hello world')
//   => { hello: 1, world: 1 }
function wordCount(str) {
  const wordsArray = str.split(' ');
  const wordCountMap = {};

  wordsArray.forEach(word => {
      if (wordCountMap[word]) {
          wordCountMap[word] += 1;
      } else {
          wordCountMap[word] = 1;
      }
  });

  return wordCountMap;
}

// Example usage
const inputString = 'hello world hello';
const wordOccurrences = wordCount(inputString);
console.log(wordOccurrences); // This will log { hello: 2, world: 1 }


// Given an object representing a bug, return true if the given bug is
// available in the given month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   isBugAvailable({
//     name: 'common butterfly',
//     availability: {
//       rarity: 'common',
//       months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
//     }
//   }, 1);
//   => true
function isBugAvailable(bug, month) {
  return bug.availability.months.includes(month);
}

// Example usage
const bug = {
  name: 'common butterfly',
  availability: {
      rarity: 'common',
      months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
  }
};

console.log(isBugAvailable(bug, 1)); // This will log true

// Given an array of objects representing bugs, return an object that'll be
// used to build a calendar. The keys of the object should be the months of the
// year, and the values should be the names of bugs available in that month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   const bugs = [
//     {
//       name: 'peacock butterfly',
//       availability: {
//         rarity: 'common',
//         months: [1, 2, 3],
//       },
//     },
//     {
//       name: 'yellow butterfly',
//       availability: {
//         rarity: 'common',
//         months: [3],
//       },
//     },
//   ];
//   buildBugHuntCalendar(bugs);
//   => {
//     1: ['peacock butterfly'],
//     2: ['peacock butterfly'],
//     3: ['peacock butterfly', 'yellow butterfly'],
//     4: [],
//     5: [],
//     ...
//     11: [],
//     12: [],
//   }

function buildBugHuntCalendar(bugs) {
  const calendar = {};

  bugs.forEach(bug => {
      bug.availability.months.forEach(month => {
          if (!calendar[month]) {
              calendar[month] = [];
          }
          calendar[month].push(bug.name);
      });
  });

  return calendar;
}

// Example usage
const bugs = [
  {
      name: 'peacock butterfly',
      availability: {
          rarity: 'common',
          months: [1, 2, 3],
      },
  },
  {
      name: 'yellow butterfly',
      availability: {
          rarity: 'common',
          months: [3],
      },
  },
];

const bugHuntCalendar = buildBugHuntCalendar(bugs);
console.log(bugHuntCalendar);

export {
  buildBugHuntCalendar,
  getNameUsingDestructuring,
  getNames,
  getPeopleByLocation,
  isBugAvailable,
  translateToPirateTalk,
  wordCount,
};
