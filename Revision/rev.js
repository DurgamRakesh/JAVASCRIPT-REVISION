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


