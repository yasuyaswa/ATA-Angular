import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer.module';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  
  LoginCustomerRequest: Customer={

    customerId: 0,
    customerName: '',
    dob: new Date(),
    gender: '',
    address: '',
    customerEmail: '',
    customerMobile: 0,
    customerPassword: ''
  };
  constructor(private customerService: CustomerService, private router: Router) {};

  ngOnInit(): void {};

  LoginCustomer(){
    this.customerService.LoginCustomer(this.LoginCustomerRequest).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        alert('Login Successful');
        //this.customerService.CustomerEmail = this.LoginCustomerRequest.customerEmail;
        this.router.navigate(['/Customer']);

      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Invalid Credentials');
      }
    });
  }
}
