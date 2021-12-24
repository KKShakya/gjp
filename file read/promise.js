const fs = require("fs")
// function myFileRead(filename) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, "utf-8", (err, data) => {
//             if (err)
//                 reject(err)
//             else
//                 resolve(data)
//         })
//     });
// }

// IIFE
// (async () => {
//     for (let index = 0; index < 4; index++) {
//         try {
//             let data = await myFileRead("files/text" + (index + 1) + ".txt");
//             console.log(data);
//         } catch (error) {
//             console.log(error);
//         }
//     }
// })()


// var promise;
// for (let i = 0; i < 4; i++) {
//     var pro = new Promise((res, rej) => {
//         fs.readFile(`files/text${i + 1}.txt`, "utf8", (err, data) => {
//             if (err) {
//                 rej(err)
//             } else {
//                 res(data)
//             }
//         })
//     })
//     pro.then((data) => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     })
// }



// for (let i = 0; i < 4; i++) {
//     fs.writeFile(`files/text${i + 1}.txt`, ""+(i + 1)+(i + 1), (err) => {
//         if (err) {
//             console.log(err);
//         }
//     })
// }




// fs.readdir("files", (err, files) => {
//     files.forEach(file => {
//         console.log(file.split(".")[1]);
//     })
// })












