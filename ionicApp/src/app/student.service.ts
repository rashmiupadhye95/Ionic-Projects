import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class StudentService {
  students = [];
  constructor() {
    var defstudents = [
      {
        rollno:'1', 
        firstName:'Rashmi', 
        lastName:'Upadhye',
        dob:'11/03/1995', 
        class :'First', 
        subject:'English', 
        teacher:'Shobha',
        address:'India'
      },

      {
        rollno:'2', 
        firstName:'Ramya', 
        lastName:'Patil',
        dob:'31/01/1995', 
        class :'First', 
        subject:'Science', 
        teacher:'Silvia',
        address:'India1'
      }
    ];
    if(localStorage.getItem('students') == null){
      this.students = defstudents;
      localStorage.setItem('students', JSON.stringify(this.students));
    }
    else{
        this.students = JSON.parse(localStorage.getItem('students'));
    }
  }

  getStudents(){
  	return this.students;
  }

  addStudent(student){
  	student.rollno = Math.round(Math.random()*100000);
    	this.students.push(student);
      localStorage.setItem('students', JSON.stringify(this.students));
  }

  updateStudent(student){
  	for(var i=0;i<this.students.length;i++){
  		if(student.rollno == this.students[i].rollno){
  			this.students[i] = student;
  		}
  	}
    localStorage.setItem('students', JSON.stringify(this.students));
  }
  getStudentById(rollno){
    for(var i=0;i<this.students.length;i++){
        if(rollno == this.students[i].rollno){
        return this.students[i];
      }
    }
    return null;
  }

  deleteStudent(student){
  	for(var i=0;i<this.students.length;i++){
  		if(student.rollno == this.students[i].rollno){
  			this.students.splice(i,1);
        localStorage.setItem('students', JSON.stringify(this.students));
  		}
  	}
  }
}
