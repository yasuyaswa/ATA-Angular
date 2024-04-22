import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Models/admin.module';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  BaseUrl: string = 'https://ata.azurewebsites.net/';

  private currentUserSource = new BehaviorSubject<Admin | null> (null);
  
  LoginAdmins(LoginAdminRequest: Admin): Observable<Admin>{
    return this.http.post<Admin>(this.BaseUrl+ 'api/Admin/Login', LoginAdminRequest);
  }

}
