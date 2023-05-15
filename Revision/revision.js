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