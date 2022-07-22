import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-bike',
  templateUrl: './booking-bike.component.html',
  styleUrls: ['./booking-bike.component.css']
})
export class BookingBikeComponent implements OnInit {
  bookingForm:FormGroup;
  submitted=false;

  constructor() { }

  ngOnInit(): void {
  }

 


}
