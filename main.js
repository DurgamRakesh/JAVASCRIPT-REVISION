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


document.querySelector('#newbtn').addEventListener("click", () => {
    newv = document.querySelector('#select')
    a = newv.options[newv.selectedIndex].value
    document.querySelector('#selectedyear').textContent = a
})

