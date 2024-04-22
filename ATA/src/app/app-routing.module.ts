import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './Components/Customers/customer-list/customer-list.component';
import { AddCustomerComponent } from './Components/Customers/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './Components/Customers/update-customer/update-customer.component';
import { SearchCustomerComponent } from './Components/Customers/search-customer/search-customer.component';
import { BookingListComponent } from './Components/Bookings/booking-list/booking-list.component';
import { AddBookingComponent } from './Components/Bookings/add-booking/add-booking.component';
import { UpdateBookingComponent } from './Components/Bookings/update-booking/update-booking.component';
import { CustomerLoginComponent } from './Components/Customers/customer-login/customer-login.component';
import { AdminLoginComponent } from './Components/Admin/admin-login/admin-login.component';

const routes: Routes = [

  {path: 'Customer', component: CustomerListComponent},
  {path: 'Customer/Add', component: AddCustomerComponent},
  {path: 'Customer/Update/:id', component: UpdateCustomerComponent},
  {path: 'Customer/Search/:id', component: SearchCustomerComponent},
  {path: 'Customer/Login', component: CustomerLoginComponent},

  {path: 'Booking', component: BookingListComponent},
  {path: 'Booking/Add', component: AddBookingComponent},
  {path: 'Booking/Update/:id', component: UpdateBookingComponent},

  {path: 'Admin/Login', component: AdminLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
