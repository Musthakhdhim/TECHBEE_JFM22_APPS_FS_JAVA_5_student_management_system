import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from 'src/app/classes/attendance';
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'app-attendancereport',
  templateUrl: './attendancereport.component.html',
  styleUrls: ['./attendancereport.component.css']
})
export class AttendancereportComponent implements OnInit {

  constructor(private attendanceService: AttendanceService,private router: Router) { }//Injecting service class 

  attendance!: Attendance[];

  ngOnInit(): void {
    this.getStudentList();
  }

  private getStudentList(){
    this.attendanceService.getStudentAttendanceList().subscribe(data =>{ //it will return the response in the form of Observable
      this.attendance=data;
    });
  }
  updateAttendance(id: number){
    // event handler expects route and id
    this.router.navigate(['editattendance',id]);
  }

  deleteAttendance(id: number){
this.attendanceService.deleteAttendance(id).subscribe (data =>{ //it will return the response in the form of Observable
    this.getStudentList();   
    });
  }
  viewStudent(id:number){
    this.router.navigate(['viewattendance',id]);
  }

  loginUser()
  {
    console.log()
    
    this.router.navigate(['/loginsuccess'])
  }
  createStudent()
  {
    console.log()
    this.router.navigate(['/createstudent'])
  }

}
