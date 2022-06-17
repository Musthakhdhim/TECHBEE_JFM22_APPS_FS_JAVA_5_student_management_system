import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mark } from '../classes/mark';

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  private baseURL = "http://localhost:8090/api/mark"

  constructor(private httpClient: HttpClient) { }

  getStudentMarkList(): Observable<Mark[]>{
    return this.httpClient.get<Mark[]>(`${this.baseURL}`);
  }
  createMark(mark: Mark): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, mark);
  }
  getStudentById(id: number): Observable<Mark>{
    return this.httpClient.get<Mark>(`${this.baseURL}/${id}`);
    }
  
    updateMark(id: number, mark: Mark): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, mark);
    }
    deleteMark(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
