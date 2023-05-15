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

//-----------------------------------------------------------------------

// let studentRecords = [{ name: 'John', id: 123, marks: 98 },
// { name: 'Baba', id: 101, marks: 23 },
// { name: 'yaga', id: 200, marks: 45 },
// { name: 'Wick', id: 115, marks: 75 }]


// let up = studentRecords.map((e) => {
//     return e.name.toUpperCase()
// })
// console.log(up);

// let more = studentRecords.filter(e => {
//    return e.marks > 50
// })
// console.log(more);
// let more1 = studentRecords.filter(e => {
//     return e.marks > 50 && e.id > 120
//  })
//  console.log(more1);

//  let sum = studentRecords.reduce((a,b) => a+b.marks,0)
//  console.log(sum)

//  let name = studentRecords.filter(e => e.marks > 50).map(e => e.name)
//  console.log(name)

//  let sum1 = studentRecords.filter(e => e.id > 120).reduce((a,b) => a+b.marks,0)
//  console.log(sum1)

//  let less50 = studentRecords.filter(e => e.marks <50).map(e => e.marks+15)
//  let gt50 = studentRecords.filter(e => e.marks > 50).map(e => e.marks)
//  let sum2 = less50.concat(gt50).reduce((a,b) => a+b,0)
//  console.log(sum2)

//  let arr = [];

//  function s(name,roll,age){
//     this.name = name,
//     this.roll = roll,
//     this.age = age
//  }

//  let n = new s('rakesh',5882,24)

//  arr.push(n)
//  console.log(arr)


// document.getElementById('text');
// document.getElementsByTagName('h1');
// document.getElementsByClassName('box')

// document.getElementById('new-h1').innerText = 'hello world'


// function change(){
// let div = document.getElementById('main1')

//     if(div.style.flexDirection == 'row'){
//         div.style.flexDirection = 'column'
//     }else{
//         div.style.flexDirection = 'row'
//     }
// }
// let h1 = document.getElementById('new-h1');
// h1.style.color ='red'
// h1.setAttribute('id','heading')

// document.getElementById('n-btn').addEventListener('click', () => {
//     document.getElementById('n-h1').innerText = 'prepbytes'
// })


// function time() {
//     let date = new Date();
//     let hrs = date.getHours();
//     let mins = date.getMinutes();
//     let secs = date.getSeconds();

//     document.getElementById('mins').innerHTML = mins +':'
//     document.getElementById('secs').innerHTML = secs +':'

//     if(hrs < 10){
//         hrs = '0'+hrs
//     }
//     if(mins < 10){
//         mins = '0'+ mins
//     }
//     if(hrs > 12){
//         hrs = hrs-12
//     document.getElementById('apm').innerHTML = 'PM'     
//     }
//     else{
//     document.getElementById('apm').innerHTML = 'AM'
//     }
//     document.getElementById('hrs').innerHTML = hrs + ':'
// }
// setInterval(time,1000)


// let btn = document.getElementById('s-btn')
// btn.addEventListener('click', () => {
//     let select = document.getElementById('s')
//     let newvalue = select.options[select.selectedIndex].value
//     document.getElementById('selectedyear').innerText = newvalue

// })


// function fn() {
//     console.log('function with 0 parameter');
// }
// fn()

// function sun(a, b) {
//     console.log('sum:', a + b);
// }
// sun(4, 5)

// let arrow = () => {
//     console.log('hello this is arrow function');
// }
// arrow()

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl();

// var x = 21;
// girl();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };

// var x = 21;
// a();
// b();

// function a() {
//     x = 20;
//     console.log(x);
// };

// function b() {
//     x = 40;
//     console.log(x);
// };

// function fac(n){
//     if(n==0){
//         return 1
//     }
//     else{
//         return n * fac(n-1)
//     }
// }

// let myfac = fac(5)
// console.log(myfac);

// console.log(a)   //Uncaught ReferenceError: a is not defined

// console.log(a)
// var a            //undefined

// console.log(a)
// let a            // Uncaught ReferenceError: Cannot access 'a' before initialization

// console.log(a)
// const a          //Uncaught SyntaxError: Missing initializer in const declaratio

// let a 
// console.log(a);     //undefined

// let a 
// console.log(a);     //undefined
//a = 10

// console.log('hi'/2);   //NaN

// var a = null;
// console.log(a);       //null


// let p = {
//     name:'rakesh',
//     age:23,
//     details(){
//         return (this.name+this.age)
//     }
// }
// let c ={

// }

// c.__proto__ = p

// console.log(c);
// console.log(c.details());

// const arr1 = [1,2,3,4,5,6];

// let sumobj = {
//     add:function(array){
//         let sum = 0;
//         for(let i = 0; i < array.length; i++){
//             sum+=array[i]
//         }
//         console.log(sum);
//     }
// }

// Array.__proto__ = sumobj;
// Array.add(arr1)

// let obj = {
//     name:'abc',
//     age:23,
//     roll:21
// }

// let keys = Object.keys(obj)
// let values = Object.values(obj)
// console.log(keys);
// console.log(values);





// function myfun(callback,msg){
//     console.log(callback(),msg);
// }

// function call(){
//     return 'hello'
// }

// myfun(call,'welcome')



// function s(n,time){
//     setTimeout(() => {
//         console.log(n);
//     },time)
// }

// s(1,1000)
// s(2,2000)
// s(3,3000)

// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//         }, 3000);
//     }, 2000);
// }, 1000);

// for(let i = 1; i <= 10; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 * i);
// }

// let p = (n) => new Promise((res, rej) => {
//     if(n!==0){
//         res('sucess')
//     }
//     else{
//         rej('error')
//     }
// })
// p(50).then(d => console.log(d)).catch(d => console.log(d))

// let p = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('hello')
//     },5000)
// })


// async function myfun(){
//     console.log('first');
//     let r = await p;
//     console.log(r);
//     console.log('last');
// }

// myfun()

// let str = 'hhfhf';

// let s = new Set();

// for(let i = 0; i < str.length; i++){
//     s.add(str[i])
// }
// console.log(s);
// let r =''
// for(let x of s){
//     r+=x
// }
// console.log(r)


// let str = 'hhfdosohf';

// let s = new Map();

// for(let i = 0; i < str.length; i++){
//     if(s.has(str[i])){
//         let val = s.get(str[i])
//         s.set(str[i],val+1)
//     }
//     else{
//         s.set(str[i],1)
//     }
// }
// console.log(s);
// for(let [k,v] of s){
//     console.log(k,v)

// }

// var num = 6;
// var res
// switch(num){
//     case 1:
//     res = 1
//     break 
//     case 2:
//     res = 2
//     break 
//     case 3:
//     res = 3
//     break 
//     case 4:
//     res = 4
//     break 
//     case 5:
//     res = 5
//     break 
//     case 6:
//     res = 6
//     break 
//     default:
//         res = 'osho'
// }
// console.log(res);

// let arr = [1,2,3,4,5,6]
// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     sum+=arr[i]
// }
// console.log(sum);
// console.log(arr.reduce((a, b) => a+b,0))


// let num = 12345;

// function findsum(n){
//     let sum = 0;
//     while(n > 0){
//         sum+=(n%10)
//         n = parseInt(n/10)
//     }
//     return sum
// }
// console.log(findsum(num));

// var a = 10;
// function outer(){
//     var b = 20;
//     function inner1(){
//         var c = 30;
//         function inner2(){
//             var res = a+b+c
//             console.log(res)
//         }
//         return inner2()
//     }
//     return inner1()
// }
// outer()

// let p = new Promise((res, rej) => {
//     res(10)
// })

// p.then(e => {
//     console.log(e);
//     return e+1
// }).then(e => {
//     console.log(e);
//     return e+1
// }).then(e =>{
//     console.log(e);
// })

// let v1 = Symbol('hello')
// let v2 = Symbol('hello')
// console.log(v1===v2);

// class p{
//     constructor(name,id,roll){
//         this.name = name
//         this.id = id
//         this.roll = roll
//     }
// }

// let person = new p('rakesh',5882,21)
// console.log(person);


// function v1(a){
//     return function v2(b){
//         return function v3(c){
//             return a+b+c
//         }
//     }
// }

// let v = v1(20)(30)(40)
// console.log(v)


// function* genfun(){
//     yield 20
//     yield 30
//     yield 40
// }

// let v = genfun()
// console.log(v.next())
// console.log(v.next())
// console.log(v.next())
// console.log(v.next())

// let N =4
// for(let i = 1; i<=N;i++){
//     let str = '';
//     for(let j = 1; j <=N ;j++){
//       str = str + '*'
//     }
//     console.log(str)
//   }

// let N =4
// for(let i = 1; i<=N;i++){
//     let str = '';
//     for(let j = 1; j <=i ;j++){
//       str = str + '*'
//     }
//     console.log(str)
//   }

//   var x = 21;
//   var girl = function () {
//       console.log(x);
//       var x = 20;
//   };
//   girl ();

// let set = new Set();

// let arr =[1,2,3,4,5,6];

// set.add(4);
// set.add(5);
// set.add(6);
// console.log(set);
// console.log(set.size);
// console.log(set.has(4));
// set.delete(4);
// console.log(set.clear());

// set.add(arr);
// console.log(set)


// let map = new Map();

// map.set('first','hello')
// map.set('sec','welcome')
// map.set('third','to')
// console.log(map.get('first'))
// console.log(map.has('first'))
// map.delete('first')
// console.log(map)

let str = 'sldhhduofg';

// let n = [... new Set(str)]
// console.log(n)
// let res =''
// for(x of n){
//   res+=x
// }
// console.log(res);

// let map = new Map();

// for(let i = 0; i < str.length; i++){
//   if(map.has(str[i])){
//     let value = map.get(str[i])
//     map.set(str[i],value+1)
//   }
//   else{
//     map.set(str[i],1)
//   }
// }
// console.log(map);

// for(let [k,v] of map){
//   console.log(k,v);
// }

let n = 5;

// for(let r = 1; r <= n; r++){
//   let str = '';
//   for(let c = 1; c <= n; c++){
//     str+='*'
//   }
//   console.log(str)
// }
  
// for(let r = 1; r <= n; r++){
//   let str = '';
//   for(let c = 1; c <= r; c++){
//     str+='*'
//   }
//   console.log(str)
// }

// for(let r = 1; r <= n; r++){
//   let str = '';
//   for(let c = r; c <= n; c++){
//     str+='*'
//   }
//   console.log(str)
// }

// for(let r = 1; r <= n; r++){
//   let str = '';
//   for(let c = r; c <= n; c++){
//     str+=' '
//   }
//   for(let c1 = 1; c1 <= r; c1++){
//     str+='*'
//   }
//   console.log(str)
// }

// for(let r = 1; r <= n; r++){
//   let str = '';
//   for(let c = 1; c <= r; c++){
//     str+=' '
//   }
//   for(let c1 = r; c1 <= n; c1++){
//     str+='*'
//   }
//   console.log(str)
// }

// for(let r = 1; r <= n; r++){
//   let str = '';
//   for(let c = 1; c <= n-r+1; c++){
//     str+='#'
//   }
//   for(let c1 = 1; c1 <= r; c1++){
//     str+='*'
//   }
//   console.log(str);
// }

// for(let r = 1; r <= n; r++){
//   let str = '';
//   for(let c = 1; c <= n-(r); c++){
//     str+=' '
//   }
//   for(let c1 = 1; c1 <= (2*r-1); c1++){
//     str+='*'
//   }
//   console.log(str);
// }

// for(let r = 1; r <= n; r++){
//   let str = '';
//   for(let c = 1; c <= n-(r); c++){
//     str+=' '
//   }
//   for(let c1 = 1; c1 <= (2*r-1); c1++){
//     str+='*'
//   }
//   console.log(str);
// }
// for(let r = 1; r <= n; r++){
//   let str = '';
//   for(let c = 1; c <= r; c++){
//     str+=' '
//   }
//   for(let c1 = 1; c1 <= 2*(n-r)-1; c1++){
//     str+='*'
//   }
//   console.log(str);
// }


// let arr = [1,3,4,5,4,5,6,7,7,6,8,9];

// let unique = arr.filter((e,i) => {
//   return arr.indexOf(e) == i
// })
// console.log(unique);

// let u = [... new Set(arr)];
// console.log(u);

// let dup = arr.filter((e,i) => {
//   return arr.indexOf(e) != i
// })
// console.log(dup);

// let obj = {}
//  arr.filter(element => {
//   if(obj[element]){
//     obj[element]++
//   }
//   else{
//     obj[element]=1
//   }
//   console.log(obj);
// });

// let s = 'level';

// let s1 = s.split('').reverse().join('')

// console.log(s1 === s);

// let arr = [1,2,3,4,5,6];

// let even = []
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] % 2 == 0){
//     even.push(arr[i])
//   }
// }
// console.log(even);

// // let odd = []
// // for(let i = 0; i < arr.length; i++){
// //   if(arr[i] % 2 !== 0){
// //     odd.push(arr[i])
// //   }
// // }
// // console.log(odd);

// let count = 0;
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] % 2 == 0){
//     count+=arr[i]
//   }
// }
// console.log(count);

// let num = 12345;

// // let d = num/10000
// // console.log(parseInt(d));


//   let e = parseInt(num/10);

// console.log(e)

// let maindiv = document.querySelector('#divmain')
// let chaild = document.querySelector('#chaild')
// let button = document.querySelector('#button')

// // button.addEventListener('click', () => {
// //     console.log('button clicked');
// // },true)

// // chaild.addEventListener('click', () => {
// //     console.log('chaild clicked');
// // },true)

// // divmain.addEventListener('click', () => {
// //     console.log('divmain clicked');
// // },true)

// button.addEventListener('click', (e) => {
//     console.log('button clicked');
//     // e.stopPropagation()
//     e.stopImmediatePropagation()

// })
// button.addEventListener('click', (e) => {
//     console.log('button dup clicked');
// })

// chaild.addEventListener('click', () => {
//     console.log('chaild clicked');
// })

// divmain.addEventListener('click', () => {
//     console.log('divmain clicked');
// })


// class p{
//     constructor(name){
//         this.name = name
//     }
//     get(){
//         console.log(this.name);
//     }
// }

// class s extends p{
//     constructor(name,roll){
//         super(name)
//         this.roll = roll
//     }
//     get(){
//         console.log(this.name,this.roll);
//     }
// }

// let per = new p('hello')
// per.get()

// let stu = new s('abc',21)
// stu.get()


// let obj = [
//     {
//         name:"a",id:50,marks1:50,marks2:100,marks3:150
//     }
// ]

// let sum = obj.filter(e => e.name == 'a').reduce((a, b) => {
//     return a+b.marks1+b.marks2+b.marks3
// },0)
// console.log(sum)

