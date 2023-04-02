//print the table

// let num = 9;
//  for(let i = 1; i <= 10; i++){
//     console.log(`${num} * ${i} = ${num*i}`);
//  }

// ARRAY:

// let studentRecords = [{ name: 'John', id: 123, marks: 98 },
// { name: 'Baba', id: 101, marks: 23 },
// { name: 'yaga', id: 200, marks: 45 },
// { name: 'Wick', id: 115, marks: 75 }]

//Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps

// let capnames = studentRecords.map((e) => {
//     return e.name.toUpperCase();
// })
// console.log(capnames); //['JOHN', 'BABA', 'YAGA', 'WICK']

//Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks

// let  studentsmore50 = studentRecords.filter(e => e.marks > 50);
// console.log(studentsmore50); //[{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120

// let sandid = studentRecords.filter(e => e.marks > 50 && e.id > 120)
// console.log(sandid); [{name: 'John', id: 123, marks : 98 }]

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students

// let sumofmarks = studentRecords.reduce((a, b) => a + b.marks,0);
// console.log(sumofmarks); //241

// let summ = 0;
// for (let i = 0; i < studentRecords.length; i++) {
//     summ += studentRecords[i].marks
// }
// console.log(summ);

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above

// let nameofstudents = studentRecords.filter(e => e.marks > 50).map(e => e.name);
// console.log(nameofstudents); //['John', 'Wick']

// Question 6: This time we are required to print the sum of marks of the students with id > 120.

// let sumofmarsid120 = studentRecords.filter(e => e.id > 120).reduce((a, b) => a + b.marks, 0);
// console.log(sumofmarsid120); //143

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

// let studentsless50 = studentRecords.filter(e => e.marks < 50).map(e => e.marks + 15);
// let studentsgt50 = studentRecords.filter(e => e.marks > 50).map(e => e.marks);

// let sum = studentsless50.concat(studentsgt50).reduce((a, b) => a + b ,0)
// console.log(sum); //271

// Question 8: Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.

// let newArr = [];

// function Students(name,classname,roll){
//     this.name = name,
//     this.classname = classname,
//     this.roll = roll

// }
// let s1 = new Students('rakesh',"10th",21)
// let s2 = new Students('vishnu',"11th",22)
// let s3 = new Students('santhosh',"9th",20)
// let s4 = new Students('srikanth',"10th",22)
// let s5 = new Students('anser',"12th",25)
// let s6 = new Students('sravan',"15th",26)

// newArr.push(s1);
// newArr.push(s2);
// newArr.push(s3);
// newArr.push(s4);
// newArr.push(s5);
// newArr.push(s6);
// console.log(newArr);


// DOM:

// Question 1 :Write the code to access element which is having id as "text2
// document.getElementById('text')

// Question 2 :Write the code to access element which is having tag as "h1"
// document.getElementsByTagName('h1')

// Question 3 :Write the code to access element which is having class as "box"
// document.getElementsByClassName('box')

// Question 4 :"Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
// document.querySelector('h1').textContent = 'hello world'

// Question 5 :Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
// function change() {
// let main = document.querySelector('.main-c')
//     if(main.style.flexDirection == 'row'){
//         main.style.flexDirection = 'column'
//     }
//     else{
//         main.style.flexDirection = 'row'
//     }
// }

// let h1 = document.querySelector('#h1-tag')
// document.querySelector('#text-btn').addEventListener('click', () => {
//     h1.textContent = 'pp'
// })

// time:

// let time = () => {
//     let d = new Date();
//     let hrs = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();

//     document.getElementById('min').innerHTML = min + ':'
//     document.getElementById('sec').innerHTML = sec + ':'


//     if(min < 10){
//         min = '0'+ min
//     }
//     if(hrs > 12){
//         hrs = hrs - 12
//     document.getElementById('apm').innerHTML = 'PM'
//     }
//     else{
//     document.getElementById('apm').innerHTML = 'AM'

//     }
//     if(hrs < 10){
//         hrs = '0'+ hrs
//     }
//     document.getElementById('hrs').innerHTML = hrs + ':'

// }
// setInterval(time, 1000)


// document.querySelector('#newbtn').addEventListener("click", () => {
//     newv = document.querySelector('#select')
//     a = newv.options[newv.selectedIndex].value
//     document.querySelector('#selectedyear').textContent = a
// })

// const arr = [
//     {name:"b1",id:25,jmarks:50,rmarks:50,nmarks:50,mmarks:50},
//     {name:"b2",id:50,jmarks:25,rmarks:50,nmarks:50,mmarks:200},
//     {name:"b3",id:100,jmarks:150,rmarks:100,nmarks:50,mmarks:50},
// ]
// // sum of b3 of:
// let newarr = arr.filter(e => e.name == 'b3').reduce((a, b) => a + b.jmarks+b.mmarks+b.rmarks+b.nmarks,0)
// console.log(newarr);

// let count = 0;
// setInterval(() => {
//     console.log(count);
//     count++
// },1000)


// console.log(window.innerWidth);

// FUNCTIONS:

// Create one function with zero parameter having a console statement;

// function myfun() {
//     console.log('hello this is myfun');
// }
// myfun();

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

// function sum(p1, p2) {
//     console.log('sum of two numbers:', p1 + p2);
// }

// sum(4, 5);

// Create one arrow function

// const arrowfun = () => {
//     console.log('hello this is arrowfun')
// }
// arrowfun();

// // "Print output: 
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl (); //undefind


// // "Print output: 
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };                 //undefind 21


// // "Print output

// var x = 21;
// a();
// b();

// function a() {

//     x = 20;
//     console.log(x);
// };
// function b() {

//     x = 40;
//     console.log(x);               //20 40
// };

// Write a function that accepts parameter n and returns factorial of n


// const myfactorialfun = (n) => {
//     if(n == 0){
//         return 1;
//     }
//     else{
//         return n * myfactorialfun(n-1);
//     }
// }

// const myfac = myfactorialfun(5);
// console.log('factoral of number:',myfac);


// "Guess the Output

// function FindSum(a, b){
//     return a + b;
// }

// function DisplayData(data, batch){
//     console.log(`i am from ${data} and My batch is EA${batch}`)
// }

// DisplayData("PrepBytes", FindSum(10, 9)); //i am from Prepbytes and My batch is EA19

// "Guess the output

// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }                           //main.js:263 Uncaught ReferenceError: Cannot access 'Abc' before initialization

// "Guess the output

// var a = 10;
// (function (){
//     console.log(a);
//     var a = 20;
// })();  //undefind

// CLOSURE:

// function counter() {
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();                 //1 0

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }                  // 3 3 3


// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

// function outer(length){
//     function inner(breadth){
//         let area = length * breadth;
//         console.log('area of rectangle:',area);
//     }
//     return inner(5);
// }

// outer(6);  //30

// Take a variable in outer function and create an inner function to increase the counter every time it is called


// function outer(){
//     var counter = 0;
//     function inner(){
//         return counter+=1;
//     }
//     return inner();
// }

// console.log(outer());
// console.log(outer());
// console.log(outer());
// console.log(outer());

// "Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();   //alert 12

// // "Print Output
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();      //alert 12


// "Print Output
// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';

//     (function innerFunc(innerArg) {
//     var innerVar = 'b';

//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);

//     })(456);
// })(123);

// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz

// PROTOTYPE:

// Question 1 : Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

// let parentObj = {
//     name:"rakesh",
//     age:23,
//     location:"hyd",
//     getDetails(){
//         return (`name:${this.name} age:${this.age} and location:${this.location}`);
//     }
// }
// let chaildObj = {

// }

// chaildObj.__proto__ = parentObj;
// console.log(chaildObj.getDetails());

// Question 2 : Write code to explain prototype chaining

// function student(name,roll){
//     this.name = name,
//     this.roll = roll
// }
//  student.prototype.loc = 'hyd'
// let s = new student('rakesh', 21);

// console.log(s);

// Question 3 :Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays


// const arr1 = [1,2,3,4,5,6]
// let sumobj = {
//     sum:function(array){
//         let s = 0;
//         for(let i = 0; i < arr1.length; i++){
//             s+=array[i]
//         }
//         console.log(s);
//     }
// }

// Array.__proto__ = sumobj;
// Array.sum(arr1)

// Question 4 :Write a JavaScript function to retrieve all the names of object's own and inherited properties.

// let obj = {
//     name:'rakesh',
//     age:23,
//     loc:"hyd"
// }

// let objkeys = Object.keys(obj);
// let objvaluse = Object.values(obj);
// console.log(objkeys);
// console.log(objvaluse);

// PROMISE_ASYNC-AWAIT:

// Question 1 : Write one example explaining how you can write a callback function ?

// function getname(c){
//     let msg = 'hello';
//     console.log(msg,c());
// }
// function call(){
//     return "rakesh";
// };
// getname(call)

// Question 2 :Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on.


// let printNumbers = (n,time) => {
//     setTimeout(() =>{
//         console.log(n);
//     },time)
// }

// printNumbers(1,1000);
// printNumbers(2,2000);
// printNumbers(3,3000);
// printNumbers(4,4000);
// printNumbers(5,5000);
// printNumbers(6,6000);
// printNumbers(7,7000);

// for(let i = 1; i <= 10; i++){
//     setTimeout(() => {
//         console.log(i);
//     },1000*i)
// }

// Question 3 : Question 2 :Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on.

// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//             setTimeout(() => {
//                 console.log(4);
//                 setTimeout(() => {
//                     console.log(5);
//                     setTimeout(() => {
//                         console.log(6);
//                         setTimeout(() => {
//                             console.log(7);
//                             setTimeout(() => {
//                                 console.log(8);
//                                 setTimeout(() => {
//                                     console.log(9);
//                                 },9000)
//                             },8000)
//                         },7000)
//                     },6000)
//                 },5000)
//             },4000)
//         },3000)
//     },2000)
// },1000)

// Question 4 : Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected

// function promfun(num){
//     return new Promise((res,rej) => {
//         if(num!=0){
//             res('promise resolved')
//         }
//         else{
//             rej('promise rejected')
//         }
//     })
// }
// promfun(0).then(data => console.log(data)).catch(data => console.log(data))

//   (or)

// let p = (num) => new Promise((res,rej) => {
//     if(num!=0){
//         res('promise resolved')
//     }
//     else{
//         rej('promise rejected')
//     }
// })
// p(0).then(data => console.log(data)).catch(data => console.log(data))

// Question 5 : Create examples to explain callback function

// function myfun1(msg,call){  

//     console.log(msg,call());
// }

// function myfun2(){
//     return ('this is callback function');
// }

// myfun1("hello",myfun2)

// Question 6 : Create examples to explain callback hell function

// setTimeout(() => {
//     console.log('HTML');
//     setTimeout(() => {
//         console.log('CSS');
//         setTimeout(() => {
//             console.log('JS');
//             setTimeout(() => {
//                 console.log('REACT');
//                 setTimeout(() => {
//                     console.log('NODEJS');
//                     setTimeout(() => {
//                         console.log('MONGODB');
//                     },6000)
//                 },5000)
//             },4000)
//         },3000)
//     },2000)
// },1000)

// Question 7 : Create examples to explain promises function

// let p = new Promise((res, rej) => {
//     let a = false;
//     if(a){
//         res('promis sucess')
//     }
//     else{
//         rej('promise error')
//     }
// })

// p.then(data => console.log(data)).catch(data => console.log(data))

// Question 8 : Create examples to explain async await function

// let p = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('hello this is promis')
//     }, 3000);
// })

// async function afun(){
//     console.log('before promise')
//     let result  = await p;
//     console.log(result);
//     console.log('after promise');
// }

// afun()

// SETS AND MAPS:

// let str1 = 'abcadeecfb';
//         let s = new Set();

//         for(let i = 0; i < str1.length; i++){

//             s.add(str1[i]);    

//         } 
//         let result = '';

//         for(let x of s) {
//             result = result + x;
//         }
//         console.log(result);


// let str = 'abcadeecfb'
// let m = new Map();

// for (let i = 0; i < str.length; i++) {
//     if (m.has(str[i])) {
//         let val = m.get(str[i])
//         m.set(str[i], val + 1)
//     }
//     else {
//         m.set(str[i], 1);
//     }
// }
// // console.log(m)

// for (let [k, v] of m) {
//     console.log(k + '=' + v);
// }; 

// call apply bind:

// let obj = {
//     name:'rakesh',
//     age:23
// }

// function getDeatils(p){
//     console.log(p,this.name,this.age);
// }

// getDeatils.call(obj,'hello')

// let obj = {
//     name:'rakesh',
//     age:23
// }

// function getDeatils(p,p2){
//     console.log(p,p2,this.name,this.age);
// }

// getDeatils.apply(obj,['hello',22])

// let obj = {
//     name:'rakesh',
//     age:23
// }

// function getDeatils(p,p2){
//     console.log(p,p2,this.name,this.age);
// }

// let newobj = getDeatils.bind(obj);

// newobj('hello','hi')

// (() =>{
//     console.log('iife');
// })()

// promise chaingin:
// let p = new Promise((res, rej) => {
//     res(10)
// })

// p.then(d => {
//     console.log(d++) 
//     return d
// }).then(e => {
//     console.log(e++);
//     return e
// }).then(f => {
//     console.log(f);
// })


// function sqr(x){
//     return x*x
// }

// let a = 10;

// console.log(sqr(a));
// console.log(a);

// let obj = {
//     name:'emp',
//     salary:10000
// }

// function x(y){
//     return y.salary+=1000;
    
// }
// console.log(x(obj));
// console.log(obj);

// class student{
//     constructor(name){
//         this.name = name;
//     }
//     getname(){
//         console.log(this.name);
//     }
// }

// let c = new student('rakesh')
// c.getname()

// let a = null ?? 'rakesh';
// let b = undefined ?? 'durgam';
// let c = 1 ?? 'durgam';

// console.log(a);
// console.log(b);
// console.log(c);

// function v1(a){
//     return function v2(b){
//         return function v3(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(v1(10)(20)(30))

// var a = 10;
// function outer(){
//     var b = 20;
//     function inner(){
//         return a+b
//     }
//     return inner()
// }
// console.log(outer());

// let arr = [1,2,3,4,5,6];

// let arr2 = [...arr]
// arr2[6] = 7
// console.log(arr);
// console.log(arr2);
// console.log(...arr);

// let [x,y,...z] = arr;

// console.log(x);
// console.log(y);
// console.log(z);