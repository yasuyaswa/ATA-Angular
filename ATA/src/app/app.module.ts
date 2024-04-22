import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './Components/Customers/customer-list/customer-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCustomerComponent } from './Components/Customers/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './Components/Customers/update-customer/update-customer.component';
import { SearchCustomerComponent } from './Components/Customers/search-customer/search-customer.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BookingListComponent } from './Components/Bookings/booking-list/booking-list.component';
import { AddBookingComponent } from './Components/Bookings/add-booking/add-booking.component';
import { UpdateBookingComponent } from './Components/Bookings/update-booking/update-booking.component';
import { CustomerService } from './Services/customer.service';
import { BookingService } from './Services/booking.service';
import { CustomerLoginComponent } from './Components/Customers/customer-login/customer-login.component';
import { AdminLoginComponent } from './Components/Admin/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    SearchCustomerComponent,
    FooterComponent,
    BookingListComponent,
    AddBookingComponent,
    UpdateBookingComponent,
    CustomerLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    CustomerService,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
