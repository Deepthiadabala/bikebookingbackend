import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bike } from '../bike';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-create-table-bike',
  templateUrl: './create-table-bike.component.html',
  styleUrls: ['./create-table-bike.component.css']
})
export class CreateTableBikeComponent implements OnInit {
  bikes: Observable<Bike[]>;

  constructor(private bikeService: BikeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.bikes = this.bikeService.getBikesList();
  }

  

  bikeDetails(){
    this.router.navigate(['details']);
  }

  updateBike(id: number){
    this.router.navigate(['update', id]);
  }

  

  

}
