import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectList } from './project-list/project-list';
import { StudentList } from './student-list/student-list';
import { StudentForm } from './student-form/student-form';
import { Assignment } from './assignment/assignment';


const routes: Routes = [
  {path: "students",component:StudentList},
  {path: "students/addstudent", component: StudentForm},
  {path: "projects", component: ProjectList},
  {path: "assignment", component: Assignment},
  {path: "", redirectTo: "students", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
