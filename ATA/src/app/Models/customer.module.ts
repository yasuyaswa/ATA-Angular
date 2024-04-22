import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



export interface Customer { 
  customerId: number;
  customerName: string;
  dob: Date;
  gender: string;
  address: string;
  customerEmail: string;
  customerMobile: number;
  customerPassword: string;
}
