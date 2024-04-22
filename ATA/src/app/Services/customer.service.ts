import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Customer} from 'src/app/Models/customer.module';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // CustomerEmail : any;

  constructor(private http: HttpClient) { }
  BaseUrl: string = 'https://ata.azurewebsites.net/';

  GetCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.BaseUrl+ 'api/Customer');
  }

  AddCustomer(AddCustomerRequest: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.BaseUrl+ 'api/Auth/Register', AddCustomerRequest);
  }

  GetCustomer(id: number): Observable<Customer>{
    return this.http.get<Customer>(this.BaseUrl+ 'api/Customer/'+ id);
  }

  UpdateCustomer(id: number, UpdateCustomerRequest: Customer): Observable<Customer>{
    return this.http.put<Customer>(this.BaseUrl+ 'api/Customer/'+ id, UpdateCustomerRequest);
  }
  DeleteCustomer(id: number): Observable<Customer>{
    return this.http.delete<Customer>(this.BaseUrl+ 'api/Customer/'+id);
  }

  LoginCustomer(LoginCustomerRequest: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.BaseUrl+ 'api/Auth/CustomerLogin', LoginCustomerRequest);
  }
}
