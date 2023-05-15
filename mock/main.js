// // console.log(a) 
// let a = 10
// function x(){
//     console.log(a) //10 c
//     let a = 20
//     console.log(a); //20
// }
// console.log(a); //10
// x()

//---------------------------------

// console.log(a) //ud
// // var a = 10
// function x(){
//     console.log(a) //ud
//     // var a = 20
//     // console.log(a); //20
// }
// console.log(a); //10
// var a = 30
// console.log(a);
// x()

// let newobj = {
//     name:'rakesh',
//     id:100,
// }

// function getDetails(p){
//     console.log(`the name is ${this.name} and id is ${this.id},${p}`);
// }

// getDetails.call(newobj,'hello welcom to js');
// getDetails.call('hello welcom to js',newobj);  //the name is undefined and id is undefined,[object Object]


// // function getDetails(p){
// //     console.log(`the name is ${this.name} and id is ${this.id},${p}`);
// // }

// // getDetails.bind(newobj, ['hello js']);

// let arr = [ 1,4,5,6,7,8,8,7,8,6];

// let newarr = []

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 5){
//         newarr.push(arr[i])
//     }
// }
// console.log(newarr);

// let o = newarr.forEach((e,i) => {
//     if(e)
// })

// let arr = [ 1,4,5,6,7,8,8,7,8,6];

// let newobj = {}
// arr.reduce((a, b) => {

// })


// let p = new Promise((res, rej) => {
    
//     setTimeout(() => {
//         res('sending msg')
//     },5000)
// })



// async function myfun(){
//     console.log('this is first line');
//     let result = await p;
//     console.log(result);
//     console.log('hello this is last line');
// }

// myfun()

// let prom = new Promise((res, rej) => {
//     let value = false;
//     if(value){
//         res('promise is sucess')
//     }
//     else{
//         rej('error in promise')
//     }
// })

// prom.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })


// let p = new Promise((res, rej) => {
//     res(10)
// })

// p.then((d) => {
//     console.log(d);
//     return d+20
// }).then((e) =>{
//     console.log(e);
//     return e+30
// }).then((f) => {
//     console.log(f);
// })

// function time(){
//     let d = new Date();
//     let hrs  = d.getHours();
//     let mins = d.getMinutes();
//     let sec = d.getSeconds();

//     if(hrs < 10){
//         hrs = '0'+hrs
//     }
//     if(mins < 10){
//         mins = '0'+mins
//     }
//     if(hrs > 12){
//         hrs = hrs-12
//     }

//     console.log(`time is ${hrs} : ${mins} : ${sec}`);
// }
// setInterval(time ,1000);

// let date = new Date()
// let d = date.getDate()
// let m = date.getMonth()+1
// let y = date.getFullYear()

// console.log(`${d}-${m}-${y}`);
