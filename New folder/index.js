// ▶️call, apply and bind
// const myname = {
//     firstname: "Prashant",
//     lastname: "Kumar",
// }

// let printfullname = function(city, state) {
//     console.log(this.firstname + " " + this.lastname + " " + city + " " + state);
// }

// printfullname.call(myname, "Patna", "Bihar")

// const name2 = {
//     firstname: "Sunny",
//     lastname: "Gupta"
// };
// printfullname.apply(name2, ["BLR", "KT"]);

// const name3 = {
//     firstname: "Lokesh",
//     lastname: "Gupta"
// }
// let print3 = printfullname.bind(name3, "BLR", "KT");
// console.log(print3);
// print3()

// let sum = (a, b) => a + b;

// let [a, b, c] = "ijk";

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// // rest is an array of items, starting from the 3rd one
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2

// default values
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];

// alert(name);    // Julius (from array)
// alert(surname); // Anonymous (default used)

// function a() {
// console.log(x);

//     b()
//     function b() {
//     var x = 100; 
//         c()
//         function c() {
//     var x = 1000; 

//             // console.log(x);
//         }
//     }
// }
// a()

// ▶️Async/Await 
// async function getData() {
//     return "my data";
// }

// const p = new Promise((resolve, reject) => {
//   resolve("Promise resolved");
// })

// // const data = await getData();

// async function getData() {   
//   const myData = await p;
//   console.log(myData);
// }

// getData();

// async function handlePromise() {
//   try {
//     const data = await fetch('https://api.github.com/users/alokfggs722');
//     const res = await data.json();
//     console.log(res);
//   } catch (err) {
//     console.log(err)
//   }
// };
// handlePromise()

// ▶️IIFE
// (function fun() {
//   console.log("good eve");
// })();

// ( () => {
//   console.log("good evening");
// })();

// ▶️Currying
// function multiply(x, y) {
//   console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(4);

// function multiply(x) {
//   return function (y) {
//     console.log(x * y);
//   }
// }

// let multiplyByTwo = multiply(2);
// multiplyByTwo(6);

// ▶️Infinite Currying
function add(a) {
  return function(b) {
    if(b) return add(a + b);
    return a;
  }
}

console.log(add(2)(3)(1)(3)(5)());

// ▶️Event bubbling/Capturing
// document.querySelector('#grandparent')
// .addEventListener('click', () => {
//   console.log("grandparent clicked");
// }, true)

// document.querySelector('#parent')
// .addEventListener('click', () => {
//   console.log("parent clicked");
// }, true)

// document.querySelector('#child')
// .addEventListener('click', () => {
//   console.log("child clicked");
// }, true)


// ▶️Debouncing
// let counter = 0
// const getData = () => {
//   console.log("Function Called.." + counter++);
// }

// const debounce = (fn, d) => {
//   let timer;
//   return function(...args) {
//     if(timer) clearInterval(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, d)
//   }
// }

// const betterFunction = debounce(getData, 500);


// ▶️Throttling
// let counter = 0;
// const getData = () => {
//   console.log("function called.." + counter++);
// }  

// const throttle = (fun, d) => {
//   let flag = true;

//   return function() {
//     if(flag) {
//       fun();
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, d);
//     }
//   }
// }

// const betterFunction = throttle(getData, 500);

// ▶️ Namaste Javascript
// getName(); // Namaste Javascript
// console.log(x); // undefined
// var x = 7;
// function getName() {
//   console.log("Namaste Javascript");
// }

// var a = 10;
// var a = 100;
// console.log(a);

// console.log(b);

// let a = 10;
// var b = 20;
// console.log(window.a);

// function x() {
//   for(var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function() {
//         console.log(i);
        
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("closure");
// }
// x();  

// function Counter() {
//   var count = 0;

//   this.incrementCounter = function() {
//     count++;
//     console.log(count);
//   }
//   this.decrementCounter = function() {
//     count--;
//     console.log(count);
//   }
// }

// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

// console.log("start");

// setTimeout(() => {
//   console.log("timer");
// }, 5000)

// console.log("end");

// let startDate = new Date().getTime();
// let endDate = startDate;

// while(endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("Outer");

// function double(x) {
//   return x * 2;
// }

// const arr = [2, 5, 1, 7];

// const arr2 = arr.map(double);
// console.log(arr2)

// ▶️ Promise

// const cart = ["shoes", "Adidas", "Reebok"];

// function createOrder() {
//   const promise = new Promise(function(resolve, reject) {
//     if(!(cart)) {
//       const err = new Error("invalid cart");
//       reject(err);
//     }
//     const orderId = "12345";
//     if(orderId) {
//       resolve(orderId);
//     }
//   });
//   return promise;
// }

// function proceedToPayment() {
//   return new Promise((resolve, reject) => {
//     resolve("Payment successful");
//   })
// }

// const promise = createOrder(cart);
// console.log(promise);

// promise
// .then((orderId) => {
//   console.log(orderId)
//   return orderId;
// })
// .then((orderId) => {
//   return proceedToPayment(orderId)
// })
// .then((paymentInfo) => {
//   console.log(paymentInfo);
// })
// .catch((err) => {
//   console.log(err)
// })

// ▶️ Promise APIs
// all, allSettled, any, race, 

// function a() {
//     let b  = 30;
// }
// console.log(b);

// ▶️ Flatten a nested array
// let arr = ["3", ["6", ["1", "6"], ["9"]]];

// function flatten(arr) {
//     return arr.reduce((acc, val) =>     
//         Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
//     []);
// }

// console.log(flatten(arr));
// console.log(arr.flat(-4));