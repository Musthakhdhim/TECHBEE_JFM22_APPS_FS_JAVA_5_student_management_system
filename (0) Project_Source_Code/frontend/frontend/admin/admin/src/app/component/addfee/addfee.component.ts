import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fee } from 'src/app/classes/fee';
import { Mark } from 'src/app/classes/mark';
import { Student } from 'src/app/classes/student';
import { FeeService } from 'src/app/services/fee.service';
import { MarkService } from 'src/app/services/mark.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-addfee',
  templateUrl: './addfee.component.html',
  styleUrls: ['./addfee.component.css']
})
export class AddfeeComponent implements OnInit {

  fee: Fee = new Fee();

  constructor(private feeService: FeeService, private router: Router) { }//Injecting service class  

  ngOnInit(): void {
  }

  createFee(){
    this.feeService.createFee(this.fee).subscribe(data=>{    //it will return the response in the form of Observable
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
}
