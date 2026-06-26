import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student-service';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit{
  constructor(
    private studentService:StudentService,
    private cdr: ChangeDetectorRef
  ){}
  students: Student[] = []
  isLoading: boolean = true
  errorMessage: string = ''

  ngOnInit(): void {
    this.getAllStudent()
  }

  getAllStudent(){
    this.isLoading = true
    this.errorMessage = ''
    console.log('Fetching from:', this.studentService.link)
    this.studentService.getAllStudent().subscribe({
      next:(data: any)=>{
        console.log('Raw response:', data)
        console.log('Response type:', typeof data)
        console.log('Is array:', Array.isArray(data))
        this.students = data || []
        this.isLoading = false
        this.cdr.detectChanges()
        console.log('Students loaded:', this.students, 'Count:', this.students.length)
        console.log('isLoading:', this.isLoading)
      },
      error:(error: any)=>{
        console.error('Full error object:', error)
        console.error('Error status:', error.status)
        console.error('Error message:', error.message)
        console.error('Error statusText:', error.statusText)
        this.errorMessage = 'Failed to load students: ' + (error.message || error.statusText || 'Unknown error')
        this.isLoading = false
        this.cdr.detectChanges()
      },
      complete:()=>{
        console.log('Request completed')
      }
    })
  }
}

