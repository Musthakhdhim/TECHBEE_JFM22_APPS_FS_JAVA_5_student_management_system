import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Mark } from 'src/app/classes/mark';
import { Student } from 'src/app/classes/student';
import { RegistrationService } from 'src/app/registration.service';
import { MarkService } from 'src/app/services/mark.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-markreport',
  templateUrl: './markreport.component.html',
  styleUrls: ['./markreport.component.css']
})
export class MarkreportComponent implements OnInit {

  constructor(private markService: MarkService,private router: Router) { }//Injecting service class 

  mark!: Mark[];

  ngOnInit(): void {
    this.getStudentList();
  }

  private getStudentList(){
    this.markService.getStudentMarkList().subscribe(data =>{ //it will return the response in the form of Observable
      this.mark=data;
    });
  }
  updateMark(id: number){
    // event handler expects route and id
    this.router.navigate(['updatemark',id]);
  }

  deleteMark(id: number){
this.markService.deleteMark(id).subscribe (data =>{ //it will return the response in the form of Observable
    this.getStudentList();   
    });
  }
  viewStudent(id:number){
    this.router.navigate(['view-student',id]);
  }

  loginUser()
  {
    console.log()
    
    this.router.navigate(['/loginsuccess'])
  }
  createStudent()
  {
    console.log()
    this.router.navigate(['/create-student'])
  }
}