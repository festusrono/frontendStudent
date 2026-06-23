import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { environment } from '../environments/environment';

// @Service()
// export class StudentService {
//   private httpClient = inject(HttpClient);
//   link="/students/"
//   getAllStudent():Observable<Student[]> {
//     return this.httpClient.get<Student[]>(this.link)
//   }
// }
@Injectable({
  providedIn: 'root'
})

export class StudentService {
  link = environment.BASE_HOST+"/students/"
  constructor(private httpClient:HttpClient) {}

  getAllStudent():Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.link)
  }
}
