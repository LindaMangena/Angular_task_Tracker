import { Injectable } from '@angular/core';
import { Task } from '../Tasks';
import { Observable, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {

    return this.http.get<Task[]>(this.apiUrl);

  }

  deleteTask(task: Task): Observable<Task>{

    const url = `${this.apiUrl}/${task.id}`;

    return this.http.delete<Task>(url);

  }

}
