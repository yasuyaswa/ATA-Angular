import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../Models/booking.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://ata.azurewebsites.net/';

  GetBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.BaseUrl+ 'api/Booking');
  }

  AddBooking(AddBookingRequest: Booking): Observable<Booking>{
    return this.http.post<Booking>(this.BaseUrl+ 'api/Booking', AddBookingRequest);
  }

  GetBooking(id: number): Observable<Booking>{
    return this.http.get<Booking>(this.BaseUrl+ 'api/Booking/'+ id);
  }

  UpdateBooking(id: number, UpdateBookingRequest: Booking): Observable<Booking>{
    return this.http.put<Booking>(this.BaseUrl+ 'api/Booking/'+ id, UpdateBookingRequest);
  }
  DeleteBooking(id: number): Observable<Booking>{
    return this.http.delete<Booking>(this.BaseUrl+ 'api/Booking/'+id);
  }
}
