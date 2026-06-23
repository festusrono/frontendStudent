import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student-service';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit{
  constructor(private studentService:StudentService){}
  students: Student[] = []
  ngOnInit(): void {
    this.getAllStudent()
  }
  getAllStudent(){
    this.studentService.getAllStudent().subscribe(
      data=>{
        this.students=data
      }
    )
  }
}
