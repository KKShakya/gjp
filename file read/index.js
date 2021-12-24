let fs = require("fs")

// for (let index = 0; index < 4; index++) {
//     fs.readFile("./files/text" + (index + 1) + ".txt", "utf-8", (err, data) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log(data);
//     })
// }


// Callback Hell

// fs.readFile("./files/text1.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
//     fs.readFile("./files/text2.txt", "utf-8", (err, data) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log(data);

//         fs.readFile("./files/text3.txt", "utf-8", (err, data) => {
//             if (err) {
//                 console.log(err);
//             }
//             console.log(data);
//         })
//     })
// })

