import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';
import {Customer} from 'src/app/Models/customer.module';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{
  customers: Customer[]=[];

  constructor(private customerService: CustomerService, private router: Router) {}

  DeleteCustomer(id: number) {
    this.customerService.DeleteCustomer(id).subscribe({
      next: () => {
        this.router.navigate(['Customer']);
        window.location.reload();
      },
      error: (error) => {
      console.error('Delete customer failed:', error);
      }
    });
  }

  ngOnInit(): void {
    this.customerService.GetCustomers()
      .subscribe({
        next: (customers)=> {
          this.customers= customers;
        },
        error: (error) => {
          console.error('Error fetching customers: ' + error)
        },
        complete: () => {
          console.log('Request completed successfully');
        }
      });
  }
}
