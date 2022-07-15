import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bike } from '../bike';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bike-lists',
  templateUrl: './bike-lists.component.html',
  styleUrls: ['./bike-lists.component.css']
})
export class BikeListsComponent implements OnInit {
  term:string;
   bikes: Bike[];
   constructor(private bikeService:BikeService,private router:Router){}
    
   ngOnInit(): void {
    this.getListOfBikes();

  }
  
   getListOfBikes(){
    this.bikeService.getBikesList().subscribe (data => {
      this.bikes = data;
      console.log(data);
    })
  }

  bikeDetails(modelNo: number){
    this.router.navigate([`details/${modelNo}`]);
  }

}
