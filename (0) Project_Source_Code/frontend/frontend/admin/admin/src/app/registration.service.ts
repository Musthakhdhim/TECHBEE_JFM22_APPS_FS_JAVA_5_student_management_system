import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }
//Observable is used to deliver messages
  public loginUserFromRemote(user :User):Observable<any>{
return this._http.post<any>("http://localhost:8090/login",user)
  }

  public registerUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8090/registeruser",user)
      }

      handleError(error: Response){}
      // public registerMarkFromRemote(mark :Mark):Observable<any>{
      //   return this._http.post<any>("http://localhost:8090/registeruser",mark)
      //     }    
}
