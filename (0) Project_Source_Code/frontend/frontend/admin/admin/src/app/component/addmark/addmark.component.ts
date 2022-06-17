import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mark } from 'src/app/classes/mark';
import { Student } from 'src/app/classes/student';
import { MarkService } from 'src/app/services/mark.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-addmark',
  templateUrl: './addmark.component.html',
  styleUrls: ['./addmark.component.css']
})
export class AddmarkComponent implements OnInit {

  mark: Mark = new Mark();
  
  constructor(private markService: MarkService, private router: Router) { }//Injecting service class  

  ngOnInit(): void {
  }

  createMark(){
    this.markService.createMark(this.mark).subscribe(data=>{    //it will return the response in the form of Observable
      console.log(data);
      this.listStudents();
    }, 
    error => console.log(error));
  }

  listStudents(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    this.createMark();
  }

  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
}
