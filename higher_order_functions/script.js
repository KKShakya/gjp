// // // let sum = 0



// // // arr.forEach(ele => sum += ele)

// // // console.log(sum);



// // // var arr = [1, 2, 3, 4, 5, 6]

// // // function myForeach(fun) {
// // //     for (let index = 0; index < arr.length; index++) {
// // //         const element = arr[index];
// // //         fun(element)
// // //     }
// // // }

// // // var sum = 0
// // // var params = function (ele) {
// // //     sum += ele
// // // }
// // // myForeach(params)

// // // console.log(sum);


















// // // const testarr = [1,2,3,4,5,6,7,8,9]
// // // var myForeach = cb => {
// // //     for (let index = 0; index < testarr.length; index++) {
// // //         cb(testarr[index])
// // //     }
// // // }

// // // let sum = 0;
// // // myForeach(ele => sum += ele)

// // // console.log(sum);





// // // map filter reduce

// // // MAP






// // // create a new array and double the elements
// // const arr = [1, 2, 3, 4, 5]

// // // var res = arr.map(function (ele) {
// // //     return ele * 2
// // // });

// // arr.forEach(function (ele) {

// // })

// // function myMap(cb) {
// //     let newArr = [];
// //     // for (let index = 0; index < arr.length; index++) {
// //     //     const element = arr[index];
// //     //     newArr.push(cb(element))
// //     // }

// //     return newArr;
// // }


// // var res = myMap(function (ele) {
// //     return ele * 2
// // });

// // console.log(res);





// // var arr = [1, 2, 3]
// // function myForeach(fun){
// //     for (let index = 0; index < arr.length; index++) {
// //         const element = arr[index];
// //         fun(element)
// //     }
// // }



// // MAP

// // write a function to double all the elements of
// // an array and return new array
// // let arr = [1, 2, 3, 4]

// // const newArr = myMap(double)
// // const newArr = arr.map(ele => ele * ele)

// // console.log(newArr);


// // function myMap(fun) {
// //     let newArr = []
// //     for (let index = 0; index < arr.length; index++) {
// //         const element = arr[index];
// //         newArr.push(fun(element))
// //     }
// //     return newArr;
// // }

// // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // filter the odd evenm numbers

// // const odds = arr.filter(ele => ele % 2 == 1)
// // const evens = arr.filter(ele => ele % 2 == 0)

// // const mapResult = arr.map(ele => ele % 2 == 0)


// // console.log(odds,evens);
// // console.log(mapResult);





// // Reduce
// const arr = [1,2]
// const sum = arr.reduce((total, ele) => total + ele)


// console.log(sum);



const student = {
    name: "himanshu",
    sci: 90,
    eng: 90,
    hindi: 90,
}
student.hindi = 50
console.log(student);
student.maths = 100
console.log(student);

// console.log(student["name"], "maths");
// Object.keys(student).forEach(key => console.log(key, student[key]))







// obj.name = "Himanshu"


// const obj = new Object()
// const arr = [1,2,3,4,5,6]
// arr.a = 10
// Object.keys(arr).forEach(ele => console.log(ele))
// console.log(`---------------`);
// console.log(arr.a);
// console.log(typeof(arr),arr.name);

// let arr = {
//     "0":10,
//     "1":10,
//     "2":10,
//     "3":10,
// }
// let arr = [10,20,30]

// console.log(arr.length);

