import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/Models/booking.module';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit{
  bookings: Booking[]= [];
  
  constructor(private bookingService: BookingService, private router: Router) {}
  
  DeleteCustomer(id: number) {
    this.bookingService.DeleteBooking(id).subscribe({
      next: (response) => {
        this.router.navigate(['Customer']);
        window.location.reload();
      },
    });
  }

  ngOnInit(): void {
    this.bookingService.GetBookings()
      .subscribe({
        next: (bookings)=> {
          console.log(bookings);
          this.bookings= bookings;
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
