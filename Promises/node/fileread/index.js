const fs = require('fs');

// for (let index = 0; index < 4; index++) {
//     fs.readFile(`./files/text${index + 1}.txt`, 'utf8', (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//     });
// }


// fs.readFile(`./files/text1.txt`, 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {

//         console.log(data);
//         fs.readFile(`./files/text2.txt`, 'utf8', (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//                 fs.readFile(`./files/text3.txt`, 'utf8', (err, data) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                         fs.readFile(`./files/text4.txt`, 'utf8', (err, data) => {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(data);
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });







// function myReadFile(fileName) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, 'utf8', (err, data) => {
//             if (err)
//                 reject(err);
//             else
//                 resolve(data);

//         });
//     });
// }



// async function fun() {
//     try {
//         for (let i = 0; i < 4; i++) {
//             let result = await myReadFile(`./files/text${i + 1}.txt`);
//             console.log(result);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }



// fun()













// const fs = require('fs')

// fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })



// function retP() {
//     return new Promise((resolve, reject) => {
//      if(success)// some success condition 
//      {
//             resolve('success')
//      }else{
//             reject('failure')
//      }
//     })
// }







// for (let index = 0; index < 4; index++) {
//     fs.writeFile(`./files/text${index + 1}.txt`, index + 1 + "", (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("success");
//         }
//     });
// }





function read1() {
    return new Promise((resolve, reject) => {
        fs.readFile(`./files/text1.txt`, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
function read1() {
    return new Promise((resolve, reject) => {
        fs.readFile(`./files/text1.txt`, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
function read2() {
    return new Promise((resolve, reject) => {
        fs.readFile(`./files/text2.txt`, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
function read3() {
    return new Promise((resolve, reject) => {
        fs.readFile(`./files/text3.txt`, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


Promise.all([read1(), read2(), read3()]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
























// How can I write a sleep function using a promise?
// sleep(time in seconds) that can be await 

// Write a program to generate a report.txt and write the following data to it:
// extension : number of files 

