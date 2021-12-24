// Question 1
// console.log(init);
// function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//         alert(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();
// console.log(init);


// Question 2
// exm
// function sum(num,num1,num2) {

// }

// function example(a) {
//     console.log(a);
// }
// example();

// sum(2)(2)(2)(2)()


// ()()()()()()...()

// sum(2)(2)(2)()

// function sum(a) {
//     return function (b) {
//         if (b == undefined) {
//             return a
//         } else {
//             return sum(a+b)
//         }
//     }
// }

// const val = sum(1)(2)(3)(4)(5)()
// console.log(val);








// function rect() {
//     var l = 10
//     var b = 20
//     return function area() {
//         return l * b;
//     }
// }

// console.log(l,b);

// let result = rect() // isska result ek area function hoga

// console.log(result);

// let result_ka_result = result()  // wo actual me area hoga
// console.log(result_ka_result);

// function rect() {
//     var l = 10
//     var b = 20
//     return function area() {
//         return l * b;
//     }
// }

// console.log(rect()(),"this will be the area of the rect");






// Question 3

// function student(rollnumber, name, marks) {
//     return function () {
//         var avg = 0;
//         for (var i = 0; i < marks.length; i++) {
//             avg += marks[i];
//         }
//         avg = avg / marks.length;
//         return [name, avg];
//     }
// }

// var roll = 10
// var name = "Himanshu"
// var marks = [100,99,98]
// student(roll, name, marks)

// create function student which takes rollnumber name marks and returns a function
// which calculates average marks and returns as an array of avg marks and name



// Question 4
// var a = 10
// {
//     var a = -10
// }

// let b = a
// {
//     let b = -20
// }

// console.log(b);







// Question 5
// function name() {
//     var a = 1;
//     function b() {
//         // console.log(a);
//         // function a() {
//         // }
//         a = 10;
//         // console.log(a);
//     }
//     b();
//     console.log(a);
// }


// Question 6
// function foo() {
//     function bar() {
//         var y = 3
//         return y
//     }
//     return bar();
//     function bar() {
//         var x = 8
//         return x
//     }
// }

// var foovalue = foo()
// alert(foovalue);


// Question 7
// function parent() {
//     var a
//     console.log(hoisted)
//     let hoisted;
//     // function hoisted() {
//     //     return "I am a function";
//     // }
//     console.log(hoisted);
// }
// console.log(parent());






// Question 8






// var a;
// console.log(a);
// const b;
// console.log(b);
// c
// console.log(c);




// console.log("112");
// setTimeout(() => {
//     confirm("abcd")
// }, 1000*10);



// setInterval(() => {
//     console.warn("1");
// }, 1000);


// implement set timeout using setInterval
// implement set interval using setTimeOut
// curring


// let move = () => {
//     console.log(1);
//     requestAnimationFrame(move)
// }
// requestAnimationFrame(move)
















