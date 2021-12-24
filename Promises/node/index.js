// console.log("start")

// setTimeout(() => {
//     console.log("mid1");
// }, 1000 * 5);



// // lines 10 min
// console.log("end");

// pending fulfillment rejected

// let balance = 1000;
// function withdraw(err, success) {
//     if (balance > 0) {
//         balance -= 100;
//         success("withdrawn 100" + " " + balance);
//     } else {
//         err("insuficient funds");
//     }
// }


// withdraw(
//     err => {
//         console.log("err", err);
//     },
//     success => {
//         console.log("success", success);
//     });














// let balance = 0;
// function withdraw() {
//     return new Promise((resolve, reject) => {
//         if (balance > 0) {
//             setTimeout(() => {
//                 balance -= 100;
//                 resolve("withdrawn 100" + " " + balance);
//             }, 1000 * 5);
//         } else {
//             reject("insuficient funds");
//         }
//     })
// }
// let result = withdraw();


// console.log("start");

// result.then(
//     (success) => {
//         console.log("success", success);
//     })
//     .catch(
//         err => {
//             console.log("err", err);
//         }
//     )

// console.log("end");


// start
// insuficient funds
// end

// start
// end
// insuficient funds




// let balance = 1000;
// function withdraw() {
//     return new Promise((resolve, reject) => {
//         if (balance > 0) {
//             setTimeout(() => {
//                 balance -= 100;
//                 resolve("withdrawn 100" + " " + balance);
//             }, 1000 * 5);
//         } else {
//             reject("insuficient funds");
//         }
//     })
// }

// async function fun() {
//     try {
//         console.log("start");
//         let result = await withdraw();
//         console.log(result);
//         console.log("end");
//     } catch (error) {
//         console.log("err", error);
//         console.log("end");
//     }
// }


// fun();



























