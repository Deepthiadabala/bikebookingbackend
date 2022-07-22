import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bike } from '../bike';
import { BikeService } from '../bike.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {

  id: number;
  bike: Bike;
  msg:string;
  userId:number=Number(localStorage.getItem('userId')) ;
  constructor(private route: ActivatedRoute, private router: Router,
    private bikeService: BikeService, private userService:UserService) { }

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

  bookBike(modelId:number,userId:number){
    this.userService.bookBike(modelId,userId).subscribe(data=>{
this.msg= data.responseSuccess;
console.log(data)

    });
  }


}
