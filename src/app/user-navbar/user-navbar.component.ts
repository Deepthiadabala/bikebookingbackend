import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  public totalItem : number = 0;
  public searchTerm !: string;
  term:string;
  constructor(private bikeService:BikeService) { }

  ngOnInit(): void {
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.bikeService.search.next(this.searchTerm);
  }
}
