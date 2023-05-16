//count the occ of rep element
// const arr = [1,2,3,2,4,5,3,1,5,9];

// const newobj = {};

// for(let i = 0; i < arr.length ;i++){
//     if(newobj[arr[i]]){
//         newobj[arr[i]]++
//     }
//     else{
//         newobj[arr[i]] = 1
//     }
// }
// console.log(newobj);

//m2

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

//------------------------------------------------------------
//display only rep elements
// const arr = [1,2,3,2,4,5,3,1,5,9];

// const newarr = []
// for(let i = 0; i < arr.length ;i++){    //m1
//     for(let j = 0; j < i;j++){
//         if(arr[i] == arr[j]){
//             newarr.push(arr[i])
//         }
//     }
// }
// console.log(newarr);

// const u = arr.filter((e,i) => { //m2
//     return arr.indexOf(e) !== i
// })
// console.log(u);

//--------------------------------------------------------
//find unique  values from an array
// const arr = [1,2,3,2,4,5,3,1,5,9];

//m1
// const u = [...new Set(arr)];//m1 -removed duplicated elements or show unique values
// console.log(u);

//m2

// const u = arr.filter((e,i) => { //m2
//     return arr.indexOf(e) == i
// })
// console.log(u);

//m3

// let count = 0 

// const newarr = []

// let flag = true;
// for(let i = 0; i < arr.length ;i++){
//     for(let j = 0; j < newarr.length;j++){
//         if(arr[i] == newarr[j]){
//             flag = false
//         }
//     }
//     count++;
//     if(count == 1 && flag == true){
//         newarr.push(arr[i])
//     }
//     flag = true;
//     count = 0;
// }
// console.log(newarr);
//-------------------------------------------

// let str = 'hello';
// let u = [...new Set(str)]

// let r = '';
// for(v of u){
//     r+=v
// }
// console.log(r);

// console.log(str.split(''))
//-----------------------------------------------------
// let str = 'helloo'

// let s = ''
// for(let i = 0; i < str.length; i++){
//     for(let j = 0; j < i; j++){
//         if(str[i] == str[j])
//         s+=str[j]
//     }
// }
// console.log(s);
//----------------------------------------------------

// let str = 'hello';

// let newobj = {};

// for(let i = 0; i < str.length; i++){
//     if(newobj[str[i]]){
//         newobj[str[i]]++
//     }
//     else{
//         newobj[str[i]] = 1
//     }
// }
// console.log(newobj);

//-------------------------------------

// pgm to print any table

// let number = 9;

// for(let i = 1; i <= 10; i++){
//     console.log(`${number} * ${i} = ${i*number}`)
// }

//-------------------------------------

// function time(){
//     let d = new Date();
//     let hrs = d.getHours();
//     let mins = d.getMinutes();
//     let secs = d.getSeconds();
//     let apm = 'am'
//     if(hrs > 12){
//         hrs = hrs - 12
//         apm = 'pm'
//     }
//     else{
//         apm = 'am'
//     }
//     if(hrs < 10){
//         hrs = '0'+hrs
//     }
//     if(mins < 10){
//         mins = '0'+mins
//     }
//     if(secs < 10){
//         secs = '0'+secs
//     }
//     console.log(`${hrs}:${mins}:${secs}${apm}`)
// }
// setInterval(time,1000)

//-------------------------------------

// function getdate(){
//     let d = new Date();
//     let date = d.getDate();
//     let m = d.getMonth()+1;
//     let y = d.getFullYear();
//     console.log(`${date}-${m}-${y}`)
// }
// getdate()

//-------------------------------------

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

//-----------------------------------

// let num = 123456;
// function sum(n){
//     let sum = 0;
// while(n > 0){
//     sum+=(n%10)  
//     n = parseInt(n/10)
// }
// return sum
// }
// console.log(sum(num))

// let fl = parseInt(num/100000);
// console.log(fl);

//-----------------------------------

// find min value of given array

// let arr = [1,2,3,4,5,6];

// m1:
// let min = Math.min(...arr)
// console.log(min)

// m2:
// let min = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log(min);

//------------------------------------

// // find max value of given array

// let arr = [1,2,3,4,5,6];

// // m1:
// // let max = Math.max(...arr);
// // console.log(max);

// //m2:
// let max = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max);

//----------------------------------------------

// reversed the string

// let str = 'hello';

// // m1:
// let rev = str.split('').reverse().join('');
// console.log(rev);

// // m2:
// // let rev = '';
// // for(let i = str.length-1; i >= 0; i--){
// //     rev+= str[i]
// // }
// // console.log(rev);

//------------------------------------------------

// fibonacci series:

// function fibonacci(length){
//     const fib = [0,1];

//     for(let i = 2; i < length; i++){
//         fib.push(fib[i-1] + fib[i-2])
//     }
//     return fib
// }
// let n = fibonacci(9);
// console.log(n)

//-----------------------------------------------------

// sort array:
// let arr = [1,2,8,5,7,3,4,9,6];

// let sortarr = arr.sort((a,b) => a-b); //accending order
// let sortarr = arr.sort((a,b) => b-a); //decending order
// console.log(sortarr)

//------------------------------------------------------

// swap variables:

// let a = 10;
// let b = 20;

// [a,b] = [b,a];
// console.log('a:',a);
// console.log('b:',b);

//-----------------------------------------------

// pgm to print pattern:
let num = 4;
for(let r = 1; r <= num; r++){
    let s = ''
    for(let c = 1; c <= num; c++){
        s+='*'
    }
    console.log(s)
}

