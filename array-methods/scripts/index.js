/**
 * Add/remove items
 * push() – adds items to the end,
 * pop() – extracts an item from the end,
 * shift() – extracts an item from the beginning,
 * unshift() - adds items to the beginning
 * splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
 * slice() - copy of a portion of an array
 * concat() - creates a new array that includes values from other arrays and additional items
 */


// /**
//  * PUSH
//  * @description adds one or more elements to the end of an array
//  * @syntax push(element0, element1, ... , elementN)
//  * @returns the new length of the array
//  */
// const array = ['Thor Odinson', 'Bruce Banner', 'Natasha Romanoff', 'Tony Stark'];




// /**
//  * POP
//  * @description removes the last element from an array
//  * @syntax pop()
//  * @returns removed element
//  */
// const array = ['Thor Odinson', 'Bruce Banner', 'Natasha Romanoff', 'Tony Stark'];


// /**
//  * SHIFT
//  * @description removes the first element from an array
//  * @syntax shift()
//  * @returns removed element
//  */
// const array = ['Thor Odinson', 'Bruce Banner', 'Natasha Romanoff', 'Tony Stark'];



// /**
//  * UNSHIFT
//  * @description adds one or more elements to the beginning of an array
//  * @syntax unshift(element0, element1, ... , elementN)
//  * @returns the new length of the array
//  */
// const array = ['Thor Odinson', 'Bruce Banner', 'Natasha Romanoff', 'Tony Stark'];



// /**
//  * SPLICE
//  * @description changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//  * @syntax splice(start, deleteCount, item1, item2, ... , itemN)
//  * @returns array containing the deleted elements
//  */
// const array = ['Thor Odinson', 'Bruce Banner', 'Natasha Romanoff', 'Tony Stark'];

// const removedElements = array.splice(1, 0, 'Peter Parker');
// console.log('array: ', array);
// console.log('removedElements: ', removedElements);

// const removedElements = array.splice(2, 1, 'Peter Parker', 'Steve Rogers');
// console.log('array: ', array);
// console.log('removedElements: ', removedElements);

// const removedElements = array.splice(2, 1);
// console.log('array: ', array);
// console.log('removedElements: ', removedElements);

// const removedElements = array.splice(1);
// console.log('array: ', array);
// console.log('removedElements: ', removedElements);

// const removedElements = array.splice(-1, 1);
// console.log('array: ', array);
// console.log('removedElements: ', removedElements);



// /**
//  * SLICE
//  * @description returns a shallow copy of a portion of an array into a new array object selected from start to end
//  * (end not included) where start and end represent the index of items in that array.
//  * The original array will not be modified
//  * @syntax slice() | slice(start) | slice(start, end)
//  */
//
// const array = ['Thor Odinson', 'Bruce Banner', 'Natasha Romanoff', 'Tony Stark'];

// const newArray = array;
// const newArray1 = array.slice();



// /**
//  * CONCAT
//  * @description creates a new array that includes values from other arrays and additional items
//  * @syntax concat(arg1, arg2...)
//  */
//
// const array = ['Thor Odinson', 'Bruce Banner', 'Natasha Romanoff', 'Tony Stark'];
//
// const newArray = array.concat(1, 2, ['Peter Parker', 'Merry Jane'], null, { age: 13 });
// console.log(newArray);


/** ==================================================================================================================================================================================*/
/** Iterate: forEach */

// /**
//  * forEach
//  * @description allows to run a function for every element of the array
//  * @syntax arr.forEach(function(item, index, array) {
//  *             // ... do something with item
//  *         });
//  */
//
// const array = ['Thor Odinson', 'Bruce Banner', 'Natasha Romanoff', 'Tony Stark'];
//
// array.forEach((elem, index, array) => {
//     console.log(`Index: ${index}: ${elem} in ${array}`);
// });
//
// array.forEach(alert);


/** ==================================================================================================================================================================================*/
/** Searching in array */

// /**
//  * indexOf/lastIndexOf and includes
//  */
//
// const array = ['Thor Odinson', 'Bruce Banner', 'Natasha Romanoff', 'Tony Stark'];
//
// // indexOf(item, from) - looks for item starting from index from, and returns the index where it was found, otherwise -1;
// console.log(array.indexOf('Bruce Banner'));
// console.log(array.indexOf('Peter Parker'));
//
// // lastIndexOf(item, from);
// console.log(array.lastIndexOf('Bruce Banner'));
// console.log(array.lastIndexOf('Peter Parker'));
//
//
// // lastIndexOf(item, from) - looks for item starting from index from, returns true if found;
// console.log(array.includes('Bruce Banner'));
// console.log(array.includes('Peter Parker'));




// /**
//  * find and findIndex: find(function(item, index, array)
//  */
//
// const array = [
//     {
//         name: 'Thor Odinson',
//         place: 'Asgard',
//     },
//     {
//         name: 'Bruce Banner',
//         place: 'New York',
//     },
//     {
//         name: 'Natasha Romanoff',
//         place: 'Moscow',
//     },
//     {
//         name: 'Tony Stark',
//         place: 'New York',
//     },
// ];
//
// console.log(array.find((item) => item.place === 'New York'));
// console.log(array.find((item) => item.place === 'Kyiv'));
//
//
// console.log(array.findIndex((item) => item.place === 'New York'));
// console.log(array.findIndex((item) => item.place === 'Kyiv'));


// /**
//  * filter(function(item, index, array))
//  */
//
// const array = [
//     {
//         name: 'Thor Odinson',
//         place: 'Asgard',
//     },
//     {
//         name: 'Bruce Banner',
//         place: 'New York',
//     },
//     {
//         name: 'Natasha Romanoff',
//         place: 'Moscow',
//     },
//     {
//         name: 'Tony Stark',
//         place: 'New York',
//     },
// ];
//
// console.log(array.filter(hero => hero.place === 'New York'));


/** ==================================================================================================================================================================================*/
/** Transform an array */

// /**
//  * split/join
//  * @syntax split(separator, limit) || join(separator)
//  */
//
// const array = ['Thor Odinson', 'Bruce Banner', 'Natasha Romanoff', 'Tony Stark'];
// const string = 'Thor Odinson, Bruce Banner, Natasha Romanoff, Tony Stark';
//
// console.log("string.split(): ", string.split()); // array with 1 element
// console.log('string.split(\'\'): ', string.split('')); // split on characters
// console.log('string.split(\'\', 4): ', string.split('', 4)); // first 4 elements
// console.log('string.split(\'Amazing separator\', 4): ', string.split('Amazing separator', 4)); // return full array
// console.log('string.split(\', \'): ', string.split(', ')); // return full array
//
// console.log('array.join(\' \'): ', array.join(' '))



// /**
//  * reverse - reverses the order of elements in arr
//  * @syntax reverse();
//  * @returns  the array after the reversal.
//  */
//
// const array = [1, 2, 3, 4, 5, 6];
// const reversedArray = array.reverse();
// console.log('reversedArray: ', reversedArray);
// console.log('array: ', array);
//
// reversedArray.push('One more elem');


// /**
//  * map - creates a new array populated with the results of calling a provided function on every element in the calling array
//  * @syntax map((element, index, array) => { ... } );
//  */
//
// const array = ['Thor Odinson', 'Bruce Banner', 'Natasha Romanoff', 'Tony Stark'];
//
// const newArray = array.map((hero, index) => {
//     const nameArray = hero.split(' ');
//     return ({
//         firstName: nameArray[0],
//         lastName: nameArray[1],
//         id: index,
//     })
// });
//
// console.log('newArray: ', newArray);



// /**
//  * sort - sorts the elements of an array in place and returns the sorted array.
//  * @syntax sort((firstEl, secondEl) => { ... } )
//  */
//
//
// const array = [1, 6, 54, 3, 323, 54, 2, 23];
//
// const callback = (firstElement, secondElement) => {
//     if (firstElement < secondElement) return -1
//     else if (firstElement == secondElement) return 0
//     else if (firstElement > secondElement) return 1
// }
//
// const sortedArray = array.sort(callback);
//
// console.log('sortedArray: ', sortedArray);
// console.log('array: ', array);
//
//
//
//
// const stringArray = ['Thor Odinson', 'Bruce Banner', 'Natasha Romanoff', 'Tony Stark'];
// const lettersArray = ['b', 'B', 'a', 'c', 'e', 'd', 'f', 'A', 'C', 'F', 'ab', 'cd', 'Ben Jhonson', 'Don\'t lose yourself, don\'t lose who you really are and what really matters to you!', 'aaa', 'bbb', 'aAb'];
//
// console.log(lettersArray.sort((a, b) => a < b ? -1 : 1));
// console.log(lettersArray.sort((a, b) => a.localeCompare(b)));
// console.log(lettersArray.sort((a, b) => b.localeCompare(a)));


