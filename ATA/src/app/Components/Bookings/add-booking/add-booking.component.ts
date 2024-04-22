import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/Models/booking.module';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit{
  AddBookingRequest: Booking={
  bookingId: 0,
  bookingDate: new Date(),
  noofPassengers: 0,
  bookingStatus: 'pending',
  customerId: 0,
  vehicleId: 0,
  routeId: 0
  }

  constructor(private bookingService: BookingService, private router: Router) { }
  ngOnInit(): void {}
  AddBooking(){
    this.bookingService.AddBooking(this.AddBookingRequest).subscribe({
      next: (bookings) => {
        this.router.navigate(['Booking'])
      }
    })
  }
}
