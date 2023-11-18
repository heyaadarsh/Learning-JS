/* ### STRING */

// We can use both single and double quotes for writing the string.
// let myName = "Aadarsh";
// let knownAs = 'AGYAT AADARSH';

// let nickName = new String("AGYAT");
// console.log(nickName);

// Strings can be created as primtives from string literals or, as objects using the string the string constructor.

// console.log(knownAs.length); // It counts the length of the string including the spaces.

// ### ESCAPE CHARACTER

// let sentence = "My name is Aadarsh aka \"AGYAT AADARSH\". ";
// console.log(sentence);

// // OR
// let intro = 'My name is Aadarsh aka "AGYAT AADARSH".';
// console.log(intro);

// // OR
// let myIntro = "My name is Aadarsh aka 'AGYAT AADARSH'.";
// console.log(myIntro);

// ### FINDING A STRING IN A STRING

// let bioData = 'Hello! My name is Agyat Aadarsh.'
// console.log(bioData.indexOf('agyat')); // O/P: -1, coz case sensitive.
// console.log(bioData.indexOf('Agyat')); // O/P: 18, includes spaces and starts counting from zero.
// console.log(bioData.indexOf('agyat', 6)); // Will check after 6th position.

// console.log(bioData.lastIndexOf('a', 6)); // It will search in backward direction.


// ### SEARCHING FOR A STRING IN A STRING

// let bioData = 'Hello! My name is Agyat Aadarsh.'
// console.log(bioData.search("name")); // Search method doesn't take 2 argument of start position.


// ### EXTRACTING STRING PARTS

//slice(start, end); end is not mandadtory
//substring(start, end);
//substr(start, length);

// slice() method extract a part of a string and returns the extracted part of the string.

// let str = "Mango, Apple, Banana";
// let res = str.slice(0, 5); // end+1
// console.log(res); //Mango

// let res1 = str.slice(7, -2); // Starts from 7th character and ends at 2 characters back from end.
// console.log(res1);

// Simillar to slice() but In substring() method we can't use -ve index values.


// substr() simliar to slice() but the difference is that 2nd parameter specifies the length of the extracted part.

// let str = "Mango, Apple, Banana";
// let res2 = str.substr(-6);
// console.log(res2);


// ### REPLACING STRING CONTENT

// // replace(searchFor, replaceWith);
// let myName = "Mai hu agyat.";
// let correctName = myName.replace('agyat', 'AGYAT');
// console.log(correctName);

// ### EXTRACTING STRING CHARACTERS

// charAt(position)
// charCodeAt(position)
// property access [ ]

// let str = "HELLO WORLD";
// console.log(str.charAt(2)); //L : Returns the character at that position

// console.log(str.charCodeAt(2)); //76 : Returns the unicode value.

// PROPERTY ACCESS
// console.log(str[2]); //L


// ### OTHER USEFUL METHODS

// let str = "agyat aadarsh";
// let newStr = str.toUpperCase();
// console.log(newStr);

// let str = "AADARSH";
// let newStr = str.toLowerCase();
// console.log(newStr);

// let fName = "Agyat";
// let lName = "Aadarsh";
// let fullName = fName.concat(" ", lName);
// console.log(fullName);

// // trim() methods removes white spaces from the both sides of the string but not of the between.
// let message = "           Hello               ";
// console.log(message);
// let newMessage = message.trim();
// console.log(newMessage);


// CONVERTING STRING TO AN ARRAY
let txt = "a, b, c, d, e";
console.log(txt.split(","));