import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fee } from '../classes/fee';
import { Mark } from '../classes/mark';

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  private baseURL = "http://localhost:8090/api/fee"

  constructor(private httpClient: HttpClient) { }

  getStudentFeeList(): Observable<Fee[]>{
    return this.httpClient.get<Fee[]>(`${this.baseURL}`);
  }
  createFee(fee: Fee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, fee);
  }
  getStudentById(id: number): Observable<Fee>{
    return this.httpClient.get<Fee>(`${this.baseURL}/${id}`);
    }
  
    updateFee(id: number, fee: Fee): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, fee);
    }
    deleteFee(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
