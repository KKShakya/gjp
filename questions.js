const fs = require('fs');
let arr = ["t1.txt", "t2.txt", "t3.txt", "t4.txt",]
var pro = new Promise((resolve, reject) => {
    fs.readFile("./files/" + "t1.txt", "utf-8", (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    })
});

// 3  => 4

for (let i = 1; i < arr.length + 1; i++) {
    pro = pro.then(data => {
        console.log(data);
        return new Promise((resolve, reject) => {
            fs.readFile("./files/" + arr[i], "utf-8", (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    })
}

// pro.then(data => {
//     console.log(data);
// })

// getVideos().then(data => {
//     setVideosonUi(arr)
// });


// function fun() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hello");
//         }, 1000);
//     })
// }

// (async () => {
//     console.log(1);
//     let result = await fun();
//     console.log(result);
//     console.log(2);
// })()





















