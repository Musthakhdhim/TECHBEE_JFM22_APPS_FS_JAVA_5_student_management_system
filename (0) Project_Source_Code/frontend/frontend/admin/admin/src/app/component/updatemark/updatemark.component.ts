import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mark } from 'src/app/classes/mark';
import { Student } from 'src/app/classes/student';
import { MarkService } from 'src/app/services/mark.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-updatemark',
  templateUrl: './updatemark.component.html',
  styleUrls: ['./updatemark.component.css']
})
export class UpdatemarkComponent implements OnInit {

  mark: Mark = new Mark();
  id!: number;

  constructor(private markService: MarkService,  private router: Router,private route: ActivatedRoute) { } //Injecting service class 

  ngOnInit(): void {
    // retrieve id from route
    this.id = this.route.snapshot.params['id'];

    this.markService.getStudentById(this.id).subscribe(data =>{ //it will return the response in the form of Observable
      this.mark = data;
    },error => console.log(error));
  }

  onSubmit(){
    this.markService.updateMark(this.id, this.mark).subscribe(data =>{  //it will return the response in the form of Observable
      this.listStudents();
    },error => console.log(error));
  }

  listStudents(){
    alert("successfully updated")
    this.router.navigate(['/students']);
  }
  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
}