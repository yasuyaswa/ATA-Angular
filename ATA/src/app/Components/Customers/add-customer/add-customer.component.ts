import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer.module';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit{
  AddCustomerRequest: Customer={
    customerId: 0,
    customerName: '',
    dob: new Date(),
    gender: '',
    address: '',
    customerEmail: '',
    customerMobile: 0,
    customerPassword: ''

  }
  constructor(private customerService: CustomerService, private router: Router) { }
  ngOnInit(): void {}
  AddCustomer(){
    this.customerService.AddCustomer(this.AddCustomerRequest).subscribe({
      next: (customers) => {
        this.router.navigate(['Customer'])
      }
    })
  }
}
