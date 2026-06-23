import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: Student[] = [
    new Student('John Doe', 20, [], 1),
    new Student('Jane Smith', 22, [], 2),
    new Student('Michael Johnson', 21, [], 3),
  ]
}
