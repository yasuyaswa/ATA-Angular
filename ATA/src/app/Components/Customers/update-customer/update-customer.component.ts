import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer.module';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit {
  CustomerDetails: Customer = {
    customerId: 0,
    customerName: '',
    dob: new Date(),
    gender: '',
    address: '',
    customerEmail: '',
    customerMobile: 0,
    customerPassword: '',
  };

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');

        if (idString) {
          const id = +idString;
          this.customerService.GetCustomer(id).subscribe({
            next: (response) => {
              this.CustomerDetails = response;
            },
          });
        }
      },
    });
  }

  UpdateCustomer() {
    this.customerService
      .UpdateCustomer(this.CustomerDetails.customerId, this.CustomerDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['Customer']);
        },
      });
  }
  
  DeleteCustomer(id: number) {
    this.customerService.DeleteCustomer(id).subscribe({
      next: (response) => {
        this.router.navigate(['Customer']);
      },
    });
  }
}
