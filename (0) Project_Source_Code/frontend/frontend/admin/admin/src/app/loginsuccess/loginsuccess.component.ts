import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

import { User } from '../user';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
  
  
  constructor(private router : Router,private _servic : RegistrationService) { }
  users!: User[];
  ngOnInit(): void {
  }
 
  logoutUser()
  {
    console.log()
    sessionStorage.removeItem('loggedUser')
    this.router.navigate(['/login'])
  }
  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
  
}

