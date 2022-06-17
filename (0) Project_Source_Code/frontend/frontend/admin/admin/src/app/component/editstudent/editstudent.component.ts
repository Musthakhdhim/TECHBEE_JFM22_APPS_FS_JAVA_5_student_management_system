import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  student: Student = new Student();
  id!: number;

  constructor(private studentService: StudentService,  private router: Router,private route: ActivatedRoute) { } //Injecting service class 

  ngOnInit(): void {
    // retrieve id from route
    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe(data =>{ //it will return the response in the form of Observable
      this.student = data;
    },error => console.log(error));
  }

  onSubmit(){
    this.studentService.updateStudent(this.id, this.student).subscribe(data =>{  //it will return the response in the form of Observable
      this.listStudents();
    },error => console.log(error));
  }

  listStudents(){
    this.router.navigate(['/studentreport']);
  }
  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
}