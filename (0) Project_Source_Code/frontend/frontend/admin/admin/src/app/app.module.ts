import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { AddstudentComponent } from './component/addstudent/addstudent.component';
import { AddattendanceComponent } from './component/addattendance/addattendance.component';
import { AddfeeComponent } from './component/addfee/addfee.component';
import { AddmarkComponent } from './component/addmark/addmark.component';

import { StudentreportComponent } from './component/studentreport/studentreport.component';
import { EditstudentComponent } from './component/editstudent/editstudent.component';
import { ViewstudentComponent } from './component/viewstudent/viewstudent.component';
import { MarkreportComponent } from './component/markreport/markreport.component';
import { UpdatemarkComponent } from './component/updatemark/updatemark.component';
import { FeereportComponent } from './component/feereport/feereport.component';
import { UpdatefeeComponent } from './component/updatefee/updatefee.component';
import { AttendancereportComponent } from './component/attendancereport/attendancereport.component';


// import { CreateStudentComponent } from './components/create-student/create-student.component';
// import { ListStudentsComponent } from './components/list-students/list-students.component';
// import { UpdateStudentComponent } from './components/update-student/update-student.component';
// import { ViewStudentComponent } from './components/view-student/view-student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    
    LoginsuccessComponent,
    AddstudentComponent,
    AddattendanceComponent,
    AddfeeComponent,
    AddmarkComponent,
    
    StudentreportComponent,
         EditstudentComponent,
         ViewstudentComponent,
         MarkreportComponent,
         UpdatemarkComponent,
         FeereportComponent,
         UpdatefeeComponent,
         AttendancereportComponent,
  
    // CreateStudentComponent,
    // ListStudentsComponent,
    // UpdateStudentComponent,
    // ViewStudentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
