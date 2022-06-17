import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  student: Student = new Student();
  msg='';

  constructor(private studentService: StudentService, private router: Router) { }//Injecting service class  

  ngOnInit(): void {
  }

  createStudent(){
    this.studentService.createStudent(this.student).subscribe(data=>{    //it will return the response in the form of Observable
      console.log(data);
      alert("successfully registered");
      this.listStudents();
    }, 
    error => console.log(error));
    this.msg="Existing admission Number";
  }

  listStudents(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    this.createStudent();
  }

  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
}