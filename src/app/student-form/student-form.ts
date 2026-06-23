import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
  student:Student=new Student("",0,[])
  isOutOfRange=false
  constructor(
    private studentService:StudentService,
    private router:Router
  ){}
  upsert(){
    const average=Number(this.student.average)
    if(average<0 || average>10){
      this.isOutOfRange=true
      return
    }
    const observer={
      next:(data:Student)=>{this.router.navigate(["/students"])},
      error:(error:any)=>{console.log(error)},
      complete:()=>{console.log("operation completed")}
    }

    this.studentService.addStudent(this.student).subscribe(observer)
  }
}
