

// function notAPromise(cb) {
//     setInterval(() => {
//         cb(42)
//     }, 4000)
// }

import { fstat } from "fs"

// notAPromise((val) => {
//     //anotherFunction(val)
// })
 

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   delay(3000).then(() => console.log('runs after 3 seconds'));

//   async function delay2(ms) {
    
//   }

//   let finalNum = new Promise(function(resolve, reject) {

//     resolve(2); 
  
//   }).then(function(result) { 
  
//     console.log(result); // 1
//     return result * 2;
  
//   }).then(function(result) { 
  
//     console.log(result); // 2
//     return result * 2;
  
//   }).then(function(result) {
  
//     console.log(result); //?
//     return result * 2;
  
//   });

//   finalNum.then(console.log)

//exersize convert a callback based function to promise
function loadSomething(data, callback) {
    //do something with data
    console.log(data)

    setTimeout(callback, 1000)
}

fs.readFile("MyTextFile.txt", "utf8", (err, data) => {
    if (err) {
        throw err;
    }

    console.log(data);
});

function readFileAsync(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(files);
            }
        });
    })
}

readFileAsync("MyTextFile.txt")
.then(data => {
    console.log(data);
})
.catch(error => {
    throw error;
});
