import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fee } from 'src/app/classes/fee';
import { Mark } from 'src/app/classes/mark';
import { Student } from 'src/app/classes/student';
import { FeeService } from 'src/app/services/fee.service';
import { MarkService } from 'src/app/services/mark.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-updatefee',
  templateUrl: './updatefee.component.html',
  styleUrls: ['./updatefee.component.css']
})
export class UpdatefeeComponent implements OnInit {

  fee: Fee = new Fee();
  id!: number;

  constructor(private feeService: FeeService,  private router: Router,private route: ActivatedRoute) { } //Injecting service class 

  ngOnInit(): void {
    // retrieve id from route
    this.id = this.route.snapshot.params['id'];

    this.feeService.getStudentById(this.id).subscribe(data =>{ //it will return the response in the form of Observable
      this.fee = data;
    },error => console.log(error));
  }

  onSubmit(){
    this.feeService.updateFee(this.id, this.fee).subscribe(data =>{  //it will return the response in the form of Observable
      this.listStudents();
    },error => console.log(error));
  }

  listStudents(){
    alert("successfully updated")
    this.router.navigate(['/feereport']);
  }
  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
}