import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddstudentComponent } from './component/addstudent/addstudent.component';
import { EditstudentComponent } from './component/editstudent/editstudent.component';
import { StudentreportComponent } from './component/studentreport/studentreport.component';
import { AddattendanceComponent } from './component/addattendance/addattendance.component';
import { AddfeeComponent } from './component/addfee/addfee.component';
import { AddmarkComponent } from './component/addmark/addmark.component';
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



const routes: Routes = [
{path:'',component:LoginComponent},
{path:'loginsuccess',component:LoginsuccessComponent},
{path:'registration',component:RegistrationComponent},
{path: 'login',component:LoginComponent},
{path: '', redirectTo: 'students', pathMatch: 'full' },
{path: 'addstudent',component:AddstudentComponent},
{path: 'addfee',component:AddfeeComponent},
{path: 'addmark',component:AddmarkComponent},

{path: 'students', component: LoginsuccessComponent},
{path: 'studentreport',component:StudentreportComponent},
{path: 'editstudent/:id',component:EditstudentComponent},
{path: 'addattendance',component:AddattendanceComponent},
{path: 'viewstudent/:id',component:ViewstudentComponent},
{path: 'markreport',component:MarkreportComponent},
{path: 'updatemark/:id',component:UpdatemarkComponent},
{path: 'feereport',component:FeereportComponent},
{path: 'updatefee/:id',component:UpdatefeeComponent},
{path: 'attendancereport',component:AttendancereportComponent},
// {path: 'create-student', component: CreateStudentComponent},
{path: '', redirectTo: 'students', pathMatch: 'full' },
// {path: 'update-student/:id', component: UpdateStudentComponent},
// {path: 'view-student/:id', component: ViewStudentComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
