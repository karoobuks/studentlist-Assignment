import Grade from "./grade.js"
import Student from "./student.js"

const form = document.querySelector('.myForm')
const submit = document.querySelector('.submit')

const person = new Grade('maths', 90)
const person2 = new Student('english', 78, 'ss3', 'kyle')

person.addGrades()
person2.showStudent()





form.addEventListener('submit', function(e){
  e.preventDefault()

   const studentName = document.querySelector('#studentName').value
   const studentClass = document.querySelector('#studentClass').value
   const subject1 = document.querySelector('.subject1').value
   const scores1 = document.querySelector('.scores1')
   const studentTable = document.querySelector('.studentnameTable')
   const subjectTable1 = document.querySelector('.subjectTable1')
   const scoreTable1 = document.querySelector('.studentscoreTable1')
   const totalTable = document.querySelector('.totalTable')
    
  
   
   const subject2 = document.querySelector('.subject2').value
   const scores2 = document.querySelector('.scores2')
   
   const subjectTable2 = document.querySelector('.subjectTable2')
   const scoreTable2 = document.querySelector('.studentscoreTable2')
   
    
  
   
   const subject3 = document.querySelector('.subject3').value
   const scores3 = document.querySelector('.scores3')
   
   const subjectTable3 = document.querySelector('.subjectTable3')
   const scoreTable3 = document.querySelector('.studentscoreTable3')

    
   
   

   if(studentName && studentClass && subject1 && subject2 && subject3){
   let score1 = Math.trunc(Math.random() * (99 - 40 + 1)) + 40

   scores1.value =`${score1}`
   studentTable.textContent = `${studentName}`
   subjectTable1.textContent = `${subject1}`
   scoreTable1.textContent = `${score1}`
   

   let score2 = Math.trunc(Math.random() * (99 - 40 + 1)) + 40
   scores2.value =`${score2}`
   
   subjectTable2.textContent = `${subject2}`
   scoreTable2.textContent = `${score2}`


   let score3 = Math.trunc(Math.random() * (99 - 40 + 1)) + 40
   scores3.value =`${score3}`
   
   subjectTable3.textContent = `${subject3}`
   scoreTable3.textContent = `${score3}`

   let totalScore = (score1 + score2 + score3)

   totalTable.textContent = `Totalscore:${totalScore}`

   
 

   

 }

} )

