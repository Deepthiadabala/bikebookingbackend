import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bike } from '../bike';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {

  id: number;
  bike: Bike;

  constructor(private route: ActivatedRoute, private router: Router,
    private bikeService: BikeService) { }

  ngOnInit() {
    this.bike = new Bike();

    this.id = this.route.snapshot.params['id'];

    this.bikeService.getBikeById(this.id)
      .subscribe(data => {
        console.log(data)
        this.bike = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['bikes']);
  }

}
