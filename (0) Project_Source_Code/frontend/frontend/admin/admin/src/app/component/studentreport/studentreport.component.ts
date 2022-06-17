import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/classes/student';
import { RegistrationService } from 'src/app/registration.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentreport',
  templateUrl: './studentreport.component.html',
  styleUrls: ['./studentreport.component.css']
})
export class StudentreportComponent implements OnInit {

  constructor(private studentService: StudentService,private router: Router) { }//Injecting service class 

  students!: Student[];

  ngOnInit(): void {
    this.getStudentList();
  }

  private getStudentList(){
    this.studentService.getStudentList().subscribe(data =>{ //it will return the response in the form of Observable
      this.students=data;
    });
  }
  updateStudent(id: number){
    // event handler expects route and id
    this.router.navigate(['/editstudent',id]);
  }

  deleteStudent(id: number){
this.studentService.deleteStudent(id).subscribe (data =>{ //it will return the response in the form of Observable
    this.getStudentList();   
    });
  }
  viewStudent(id:number){
    this.router.navigate(['/viewstudent',id]);
  }

  loginUser()
  {
    console.log()
    this.router.navigate(['/loginsuccess'])
  }
  createStudent()
  {
    console.log()
    this.router.navigate(['/addstudent'])
  }
}