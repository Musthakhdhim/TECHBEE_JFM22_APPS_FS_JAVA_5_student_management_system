import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from 'src/app/classes/attendance';
import { Student } from 'src/app/classes/student';
import { AttendanceService } from 'src/app/services/attendance.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-addattendance',
  templateUrl: './addattendance.component.html',
  styleUrls: ['./addattendance.component.css']
})
export class AddattendanceComponent implements OnInit {

  attendance: Attendance = new Attendance();

  constructor(private attendanceService: AttendanceService, private router: Router) { }//Injecting service class  

  ngOnInit(): void {
  }

  createFee(){
    this.attendanceService.createAttendance(this.attendance).subscribe(data=>{    //it will return the response in the form of Observable
      console.log(data);
      this.listStudents();
    }, 
    error => console.log(error));
  }

  listStudents(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    
    this.createFee();
  }

  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
  getStudentById(){
    
  }
}
