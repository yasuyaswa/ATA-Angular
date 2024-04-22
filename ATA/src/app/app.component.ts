import { Component } from '@angular/core';
import { Customer } from './Models/customer.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ATA';

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
}
