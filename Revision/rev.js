// var a = '10';
// var b = 10

// console.log(a==b) //true
// console.log(a===b) //false

//-----------------------------------

// const arr = [1,2,3,4,5,6];
// console.log(...arr) // 1 2 3 4 5 6
// const arr1 = [...arr]
// console.log(arr1)
// arr1[6] = 7
// console.log(arr1) //[1, 2, 3, 4, 5, 6, 7]
// console.log(arr) //[1, 2, 3, 4, 5, 6]

// const [x,y,...z] = arr
// console.log(x) // 1
// console.log(y) // 2
// console.log(z) // [3, 4, 5, 6]

//----------------------------------------------

// const name = () => {
//     console.log('hello')
// }
// name()

// const outerFun = () => {
//     return 'hi'
// }

// const innerFun = (p) => {
//     let name = 'rakesh';
//     let msg = p()
//     console.log(name,msg);
// }
// innerFun(outerFun);

// const outer = () => {
//     const inner = () => {
//         return('innerfun');
//     }
//     return inner()
// }

// console.log(outer())

//---------------------------

// var a = 10
// function myfun(){
//     var b = 20
//     function mufun2(){
//         var c = 30;
//         return(a+b+c);
//     }
//     return mufun2()
// }
// var v = myfun()
// console.log(v);

//-------------------------

// const obj = {
//     name:'rakesh',
//     id:100
// }
// function getDeatils(p) {
//     console.log(this.name,this.id,p);
// }

// getDeatils.call(obj,'msg')

// const obj = {
//     name:'rakesh',
//     id:100
// }
// function getDeatils(p,q) {
//     console.log(this.name,this.id,p,q);
// }

// getDeatils.apply(obj,['msg','hi'])

// const obj = {
//     name:'rakesh',
//     id:100
// }
// function getDeatils(p,q) {
//     console.log(this.name,this.id,p,q);
// }

// let n = getDeatils.bind(obj)
// n('msg',101)

//-------------------------------

// 1:
// const obj = {
//     name:"rakesh",
//     id:100
// }
// console.log(obj);

// 2:
// function data(name,id){
//     this.name = name,
//     this.id = id
// }

// let d = new data('rakesh',100);
// console.log(d);

// 3:
// let obj = new Object()

// obj.name = 'rakesh'
// obj.id = 100
// console.log(obj);

// 4:
// class data{
//     constructor(name,id){
//         this.name = name,
//         this.id = id
//     }
// }

// let d = new data('rakesh',100)
// console.log(d);

//----------------------------------------

// function msg(){
//     return 'hello'
// }

// function fun(callback){
//     let newmsg = 'hi'
//     let m = callback();
//     console.log(newmsg,m);
// }
// fun(msg)

//----------------------------------------

// function person(name,age){
//     this.name = name,
//     this.age = age
// }

// let p = new person('rakesh',23)

// person.prototype.state = 'ts';

// console.log(p)
// console.log(p.state)

//----------------------------------------

// console.log(a) // not d

// console.log(a); //und
// var a 

// console.log(a); //und
// var a = 10

// console.log(a); //cannot access a before its initilazation
// let a ;

// console.log(a); //cannot access a before its initilazation
// let a = 10

// console.log('first'/10) //NaN

//----------------------------------------

// const sum = (a,b) => console.log(a+b);
// sum(4,5);

//----------------------------------------

// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//         }, 3000);
//     },2000)
// },1000)

//----------------------------------------

// (function(a,b){
//     console.log(a+b)
// })(4,5)

//----------------------------------------

// let p = new Promise((res,rej) => {
//     let value = false;

//     if(value){
//         res('sucess')
//     }
//     else{
//         rej('error')
//     }
// }).then((x) => {
//     console.log(x)
// }).catch((y) => {
//     console.log(y)
// })

// let p = new Promise((res,rej) => {
//     let value = false;
//     if(value){
//         res(10)
//     }
//     else{
//         rej('error')
//     }
// }).then((x) => {
//     console.log(x)
//     return x+20
// }).then((x) => {
//     console.log(x);
//     return x+30
// }).then((x) => {
//     console.log(x)
// }).catch((y) => {
//     console.log(y)
// })

// let url = 'https://jsonplaceholder.typicode.com/users';

// function fetchData(url){
// fetch(url).then((res) => {
//     return res.json();
// }).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })
// }
// fetchData(url);
//----------------------------------------

// let p = new Promise((res,rej) => {
//     setTimeout(() => {
//         res('hi from promise')
//     },5000)
// })

// async function asfun() {
//     console.log('hello')
//     let msg = await p;
//     console.log(msg);
//     console.log('last msg');
    
// }
// asfun();

// let url = 'https://jsonplaceholder.typicode.com/users';

// async function fetchData(url){

//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
// }
// fetchData(url);

//----------------------------------------

// function add(a,b){
//     return(a+b)
// }
// console.log(add(4,5));

// var c = 6;
// function add1(a,b){
//     return(a+b+c)
// }
// console.log(add1(4,5));

//----------------------------------------

// function value(x){
//     return x*x
// }

// let y = 10;

// console.log(value(10));
// console.log(y);

// function ref(x){ 
//     return x.age = 25
// }

// let obj = {
//     name:"rakesh",
//     age:23
// }

// console.log(ref(obj));
// console.log(obj.age);

//----------------------------------------

// class person{
//     constructor(name,id){
//         this.name = name,
//         this.id = id
//     }
//     getData(){
//         console.log(this.name,this.id)
//     }
// }

// let p = new person('rakesh',23)
// console.log(p);
// p.getData();

//----------------------------------------

// let p = null ?? 'rakesh';
// let p1 = undefined ?? 'rakesh';
// let p2 = 1 ?? 'rakesh';
// let p3 = 'hi' ?? 'rakesh';
// console.log(p);
// console.log(p1);
// console.log(p2);
// console.log(p3);

//----------------------------------------

// function calculate(a){
//     return function v1(b){
//         return function v2(c){
//             return (a+b+c);
//         }
//     }
// }
// let d = calculate(10)(20)(30);
// console.log(d);

//----------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------

// var a = '10';
// var b = 10;

// console.log(a==b); //true
// console.log(a===b) //false


// const arr = [1,2,3,4,5,6];
// const a = [...arr];
// arr[6] = 7;

// console.log(...arr);
// console.log(...a);

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr3 = [...arr1,...arr2];
// console.log(arr3);


// let obj = {
//     name:"rakesh"
// }
// let newo = {...obj};
// console.log(newo)

// const [x,y,...z] = arr;
// console.log(x);
// console.log(y);
// console.log(z);


// function myfun1(){
//     return 'hello'
// }

// function myfun2(callback){
//     let msg = 'welcome';
//     let c = callback();
//     console.log(msg,c)

// }

// myfun2(myfun1)

// function outer(){
//     function inner(){
//         return 'inner fun'
//     }
//     return inner();
// }

// console.log(outer());

// const fun = () => {
//     console.log('arrow fun')
// }
// fun();

// var a = 10;
// function outer(){
//     var b = 20;
//     function inner(){
//         var c = 30;
//         var sum = a+b+c;
//         return sum;
//     }
//     return inner();
// }

// console.log(outer());

// let obj = {
//     name:"rakesh",
//     id:100
// }

// function getdata(p,p1){
//     console.log(this.name,this.id,p,p1)
// }

// // getdata.call(obj,'hello');
// // getdata.apply(obj,['hello',101]);
// let v = getdata.bind(obj);
// v('hello',101);

// function data(name,id){
//     this.name = name,
//     this.id = id
// }
// let d = new data('rakesh',101);
// console.log(d);

// class person{
//     constructor(name,id){
//         this.name = name,
//         this.id = id
//     }
// }

// let d = new person('rakesh',101);
// person.prototype.state = 'ts';
// console.log(d);
// console.log(d.state);

// setTimeout(() => {
//     console.log('hi')
// },5000);

// setInterval(() => {
//     console.log('hi')
// },1000);

// let p = new Promise((res,rej) => {
//     let v = false;
//     if(v){
//         res('success')
//     }
//     else{
//         rej('error')
//     }
// }).then((x) => {
//     console.log(x);
// }).catch((x) => {
//     console.log(x);
// })

// let p = new Promise((res,rej) => {
//     let v = true;
//     if(v){
//         res(10)
//     }
//     else{
//         rej('error')
//     }
// }).then((x) => {
//     console.log(x);
//     return x+20
// }).then((x) => {
//     console.log(x);
//     return x+30
// }).then((x) => {
//     console.log(x);
// }).catch((x) => {
//     console.log(x);
// })

// let p = new Promise((res,rej) => {
//     let v = true;
//     if(v){
//         setTimeout(() => {
//             res(10)
//         },5000)
//     }
//     else{
//         rej('error')
// }   
// })
// async function fun(){
//     console.log('before');
//     let v = await p;
//     console.log(v);
//     console.log('after');
// }
// fun();

// const arr = [1,2,3,4,5,6];

// const double = arr.map((e) => e*2);
// console.log(double);

// const fil = arr.filter((e) => e > 4);
// console.log(fil);

// const sum = arr.reduce((a,b) => a+b,0);
// console.log(sum);

// const com = arr.map((e) => e*2).filter((e) => e> 6).reduce((a,b) => a+b,0);
// console.log(com);

// 
// document.getElementById('parent').addEventListener('click',() => {
//     console.log('parent')
// })
// document.getElementById('chaild').addEventListener('click',() => {
//     console.log('chaild')
// })
// document.getElementById('event1').addEventListener('click',(e) => {
//     console.log('event1')
//     // e.stopPropagation();
//     e.stopImmediatePropagation();
// })
// document.getElementById('event1').addEventListener('click',(e) => {
//     console.log('event1 dup')
// })
// document.getElementById('event2').addEventListener('click',() => {
//     console.log('event2')
// })

// document.getElementById('ul').addEventListener('click',(e) => {
//     e.target.classList.toggle('li');
//     console.log(e.target.textContent)
// })

// function* genfun(){
//     yield 10
//     yield 20
//     yield 30
// }

// let v = genfun();
// console.log(v.next());
// console.log(v.next());
// console.log(v.next());
// console.log(v.next());

// console.log('before loop');
// for(let i = 1; i <= 10; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }
// console.log('after loop');

// console.log('before loop');
// for(let i = 1; i <= 10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }
// console.log('after loop');

// var a = 4;
// var b;
// switch(a){
//     case 1:
//         b=1
//     break
//     case 2:
//         b=2
//         break
//     case 3:
//         b=3
//         break
//     case 4:
//         b=4
//         break
//     default:
//         b='error'
// }
// console.log(b);




// (function(a,b){
//     let sum = a+b
//     console.log(sum)
// })(4,5);

// function fibo(n){
//     if(n<=1){
//         return n
//     }
//     else{
//         return (fibo(n-1) + fibo(n-2))
//     }
// }

// for(let i = 0; i <= 5; i++){
//     console.log(fibo(i))
// }

// let a = 10;
// function fun(){
//     a = 20;
//     console.log(a)
// }
// fun()
// console.log(a); //10

// const arr = [1,2,3,4,5,6];

// console.log(...arr);

// const arr2 = [...arr]
// console.log(arr2)


// let str = 'welcome';

// //without inbuilt method
// let revstr = '';
// for(let i = str.length-1; i >= 0 ;i--){
//     revstr = revstr+str[i]
// }
// console.log(revstr);

// //with inbulit method
// let revstr2 = str.split('').reverse().join('');
// console.log(revstr2)

function person(name,id){
    this.name = name,
    this.id = id

}

let dataof = new person('rakesh',100)

console.log(dataof)
