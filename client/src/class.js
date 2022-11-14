let fetch = require('node-fetch')

// // Callbacks and Callback Hell
// function getFutureValue(input, callBack) {
//     //do someting with input
//     let newVal = input * 3

//     //takes an unknown amount of time to complete 

//     setTimeout(() => {
//         callBack(newVal)
//     }, 2000)
// }

// getFutureValue(3, (value) => {
//     value //?

// })


//What is a promise, real world

//promise in Js example setTimeout

// let myPromise = new Promise((reslove, reject) => {

//     //do async things

//         reslove('the data')


// })

// myPromise.then((data) => {
//     console.log(data)
// })

// console.log('hey ther')

console.log('hello')


fetch('https://www.google.com/')
.then(res => res.text())
.then(text => console.log(text)) //?

//promise example immediate reslove and promises' are always async

//promise example .finally()

//promise example chaining

//exercise turn an callback function into a promise

// fs.readFile("MyTextFile.txt", "utf8", (err, data) => {
//     if (err) {
//         throw err;
//     }

//     console.log(data);
// });


//async await