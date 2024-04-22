import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/Models/booking.module';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit{
  BookingDetails: Booking = {
    bookingId: 0,
    bookingDate: new Date(),
    noofPassengers: 0,
    bookingStatus: 'pending',
    customerId: 0,
    vehicleId: 0,
    routeId: 0
  };

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');

        if (idString) {
          const id = +idString;
          this.bookingService.GetBooking(id).subscribe({
            next: (response) => {
              this.BookingDetails = response;
              console.log(this.BookingDetails);
            },
          });
        }
      },
    });
  }

  UpdateBooking() {
    this.bookingService
      .UpdateBooking(this.BookingDetails.bookingId, this.BookingDetails)
      .subscribe({
        next: (response) => {
          console.log(response)
          this.router.navigate(['Booking']);
        },
      });
  }
  
  DeleteBooking(id: number) {
    this.bookingService.DeleteBooking(id).subscribe({
      next: (response) => {
        this.router.navigate(['Booking']);
      },
    });
  }
}
