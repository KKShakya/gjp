// Write a function which takes an argument n secoends and you can await it


function sleep(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done waiting");
        }, 1000 * n);
    })
}


// IIFE
// (async () => {
//     console.log("start");
//     await sleep(5);
//     console.log("end");
// })()


// IIFE
// ((a, b, c, d) => {
//     console.log(a, b, c, d);
//     console.log("fun");
// })(1, 2, 3, 4)


// fun();









// Reading data from files file 1, file2, file 3, file 4,
// Parallel

// fs.readFile(`./files/text${index + 1}.txt`, 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// Sync
// sync in async await
// callback hell sync

// use Promises and for loop  

