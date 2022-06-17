import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from '../classes/attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private baseURL = "http://localhost:8090/api/attendance"

  constructor(private httpClient: HttpClient) { }

  getStudentAttendanceList(): Observable<Attendance[]>{
    return this.httpClient.get<Attendance[]>(`${this.baseURL}`);
  }
  createAttendance(attendance: Attendance): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, attendance);
  }
  getStudentById(id: number): Observable<Attendance>{
    return this.httpClient.get<Attendance>(`${this.baseURL}/${id}`);
    }
  
    updateAttendance(id: number, attendance: Attendance): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, attendance);
    }
    deleteAttendance(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}

