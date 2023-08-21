//QUESTION
const answer1 = document.getElementById("Nonee")
const btn = document.getElementById("btn1")

const answer2 = document.getElementById("none2")
const btn1 = document.getElementById("btn2")

const answer3 = document.getElementById("none3")
const btn2 = document.getElementById("btn3")

const answer4 = document.getElementById("none4")
const btn3 = document.getElementById("btn4")

const answer5 = document.getElementById("none5")
const btn4 = document.getElementById("btn5")

const answer6 = document.getElementById("none6")
const btn5 = document.getElementById("btn6")

const answer7 = document.getElementById("none7")
const btn6 = document.getElementById("btn7")


const answer8 = document.getElementById("none8")
const btn7 = document.getElementById("btn8")



btn.addEventListener('click',function(){
   if( answer1.style.display === "none"){
    answer1.style.display="block"
   }
   else{
    answer1.style.display="none"
   }
})

btn1.addEventListener('click',function(){
    if( answer2.style.display === "none"){
        answer2.style.display="block"
       }
       else{
        answer2.style.display="none"
       }
})

btn2.addEventListener('click',function(){
    if( answer3.style.display === "none"){
        answer3.style.display="block"
       }
       else{
        answer3.style.display="none"
       }
})

btn3.addEventListener('click',function(){
    if( answer4.style.display === "none"){
        answer4.style.display="block"
       }
       else{
        answer4.style.display="none"
       }
})

btn4.addEventListener('click',function(){
    if( answer5.style.display === "none"){
        answer5.style.display="block"
       }
       else{
        answer5.style.display="none"
       }
})

btn5.addEventListener('click',function(){
    if( answer6.style.display === "none"){
        answer6.style.display="block"
       }
       else{
        answer6.style.display="none"
       }
})

btn6.addEventListener('click',function(){
    if( answer7.style.display === "none"){
        answer7.style.display="block"
       }
       else{
        answer7.style.display="none"
       }
})

btn7.addEventListener('click',function(){
    if( answer8.style.display === "none"){
        answer8.style.display="block"
       }
       else{
        answer8.style.display="none"
       }
})


let studentRecords =  [
        {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ,
] 
//Answer 1
const ans=studentRecords.map((name) => name.name.toUpperCase())
console.log(ans)

//Answer 2
const ans2=studentRecords.filter((markss) => markss.marks > 50)
console.log(ans2)

//Answer 3
const ans3=studentRecords.filter((best) => best.marks > 50 && best.id > 120);
console.log(ans3)

//Answer 4
const ans4=studentRecords.reduce((total ,mark ) => total+ mark.marks , 0 )
console.log(ans4)

//Answer 5
const ans5=studentRecords
.filter(record => record.marks > 50)
.map(record => record.name);

console.log(ans5)

//Answer 6
const ans6=studentRecords
.filter(record => record.id > 120)
.reduce((total , mark ) => total + mark.marks ,0 ); //.reduce((total, record) => total + record.marks, 0);


console.log(ans6)


//Answer 7
studentRecords.forEach(increase =>{
    if(increase.marks < 50){
        increase.marks+=15
    }
    })
let totalss=studentRecords.filter(increase=>increase.marks>50)
.reduce((total, increase) => total + increase.marks, 0);









const student1 = { name: 'Alok', class: 10, rollNo: 1 };
            const student2 = { name: 'surya', class: 9, rollNo:2 };
            const  student3 = { name: 'kumar', class: 11, rollNo: 3};
            const  student4 = { name: 'praksh', class: 8, rollNo: 4 };
            const  student5 = { name: 'priti', class: '10', rollNo: 5 };
            const  student6 = { name: 'pragya', class: 1, rollNo:6 };


                let studentArray = [student1, student2, student3, student4, student5, student6];

                console.log(studentArray);