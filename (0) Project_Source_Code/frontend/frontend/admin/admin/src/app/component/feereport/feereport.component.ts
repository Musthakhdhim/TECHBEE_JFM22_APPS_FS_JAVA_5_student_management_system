import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Fee } from 'src/app/classes/fee';
import { Mark } from 'src/app/classes/mark';
import { Student } from 'src/app/classes/student';
import { RegistrationService } from 'src/app/registration.service';
import { FeeService } from 'src/app/services/fee.service';
import { MarkService } from 'src/app/services/mark.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-feereport',
  templateUrl: './feereport.component.html',
  styleUrls: ['./feereport.component.css']
})
export class FeereportComponent implements OnInit {

  constructor(private feeService: FeeService,private router: Router) { }//Injecting service class 

  fee!: Fee[];

  ngOnInit(): void {
    this.getStudentList();
  }

  private getStudentList(){
    this.feeService.getStudentFeeList().subscribe(data =>{ //it will return the response in the form of Observable
      this.fee=data;
    });
  }
  updateFee(id: number){
    // event handler expects route and id
    this.router.navigate(['updatefee',id]);
  }

  deleteFee(id: number){
this.feeService.deleteFee(id).subscribe (data =>{ //it will return the response in the form of Observable
    this.getStudentList();   
    });
  }
  viewStudent(id:number){
    this.router.navigate(['viewfee',id]);
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