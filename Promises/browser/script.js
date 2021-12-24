// function callBackImplementation(cb, error) {
//     let a = 1 + 3
//     if (a == 2) {
//         cb(a)
//     }
//     else {
//         error(a)
//     }
// }

// callBackImplementation(function (a) {
//     console.log("Success", a);
// }, function (a) {
//     console.log("Error", a);
// })

// function promiseImplementation() {
//     return new Promise(function (resolve, reject) {
//         let a = 1 + 1
//         if (a == 2) {
//             resolve(a)
//         }
//         else {
//             reject(a)
//         }
//     })
// }


// promiseImplementation().then(function (a) {
//     console.log("Success", a);
// }).catch(function (a) {
//     console.log("Error", a);
// })

// create a iife
// (async () => {
//     function promiseImplementation() {
//         return new Promise(function (resolve, reject) {
//             let a = 1 + 2
//             if (a == 2) {
//                 resolve(a)
//             }
//             else {
//                 reject(a)
//             }
//         })
//     }

//     try {
//         let result = await promiseImplementation()
//         console.log("Success", result);
//     } catch (error) {
//         console.log("Error", error);
//     }
// })()



// axios.post("https://jsonplaceholder.typicode.com/posts", {
//     userId: 1,
//     title: "Hello World",
//     body: "This is the body of the post"
// }).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.log(error);
// });



// let result = axios.get("https://jsonplaceholder.typicode.com/todos/1")
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });




// console.log("start")

// setTimeout(() => {
//     console.log("mid1");
// }, 1000 * 5);



// // lines 10 min 
// console.log("end");





// async function fun() {
//     try {

//         let result = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
//         let { data } = result
//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }

// }



// fun()






// let arr = [a1, a2, a3, a4]
// let obj = { a1: 1, a2: 2, a3: 3, a4: 4 }

// var a = 10
// var b = 20


// [a, b] = [b, a]


// console.log(a, b);




// const { readFile } = require("fs")

let data = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${"noida"}&appid=bab281d79e5f1e9755a68d754cc313e7&units=metric)`);
data.then((res) => {
    console.log(res.data.weather);
}).catch(err => {
    console.log(err);
});













