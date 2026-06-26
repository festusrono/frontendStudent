import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm implements OnInit{
  @ViewChild('studentForm') studentForm!: NgForm;
  student:Student=new Student("",0,[])
  isOutOfRange=false
  id:any
  constructor(
    private studentService:StudentService,
    private router:Router,
    private activeRoute:ActivatedRoute,
  ){}

ngOnInit(): void {

}

  upsert(){
    const average: number = typeof this.student.average === 'string' ? parseFloat(this.student.average as string) : Number(this.student.average)
    if(average < 0 || average > 10){  //if average is less than 0 or average is greather than 10
      this.isOutOfRange=true
      return
    }
    this.isOutOfRange = false
    const observer={
      next:(data:Student)=>{
        this.student = new Student("", 0, [])
        this.isOutOfRange = false
        if(this.studentForm){
          this.studentForm.resetForm()
        }
        this.router.navigate(["/students"])
      },
      error:(error:any)=>{
        console.log("Error adding student:", error)
        this.isOutOfRange = true
      },
      complete:()=>{console.log("operation completed")}
    }

    this.studentService.addStudent(this.student).subscribe(observer)
  }
}

