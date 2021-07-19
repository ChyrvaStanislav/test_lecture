/**
 * @param length {Number}
 * @param step {Number}
 * @returns {[Number]}
 */
const createArrayOfNumbers = (length, step) => {
    const array = [];
    let element = 0;

    for (let i = 0; i < length; i++) {
        array[i] = element;
        element +=step
    }

    return array;
};

/**
 * @param array {[Number]}
 * @returns {[Number]}
 */
const doubleNumbersInArray = (array) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i] * 2;
    }
    return newArray;
};



// setTimeout(() => {
//     console.log('1000');
// }, 1000);
//
// setTimeout(() => {
//     console.log('2000');
// }, 2000);
//
// setTimeout(() => {
//     console.log('3000');
// }, 3000);


// const myPromise = new Promise((resolve) => {
//     let second = 1;
//     const timer = setInterval(() => {
//         console.log(second);
//         second++;
//     }, 1000)
//
//     setTimeout(() => {
//         clearInterval(timer);
//         resolve(createArrayOfNumbers(10,2));
//     }, 6000);
// })
//
// myPromise.then(arrayLogger);






