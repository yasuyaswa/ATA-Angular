import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



export interface Booking { 
  bookingId: number,
  bookingDate: Date,
  noofPassengers: number,
  bookingStatus: string,
  customerId: number,
  vehicleId: number,
  routeId: number
}
