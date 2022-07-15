import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bike } from '../bike';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-create-bike',
  templateUrl: './create-bike.component.html',
  styleUrls: ['./create-bike.component.css']
})
export class CreateBikeComponent implements OnInit {
  
  exform:FormGroup;
  bike: Bike = new Bike();
  submitted = false;

  constructor(private bikeService: BikeService,private formbuilder: FormBuilder,
    private router: Router) { }

    ngOnInit(): void {
      this.exform = new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
      });
      }
    
      clicksub() {
        console.log(this.exform.value);
        this.exform.reset();
      // this.exform = this.formbuilder.group({
      // modelName:['',Validators.required],
      // })
    }

    get name() {
      return this.exform.get('name');
    }

    get message() {
      return this.exform.get('message');
    }

  newBike(): void {
    this.submitted = false;
    this.bike = new Bike();
  }

  save() {
    this.bikeService.createBike(this.bike)
      .subscribe(data => console.log(data), (error) => console.log(error));
    this.bike = new Bike();
    this.goToTable();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  goToTable() {
    this.router.navigate(['table']);
  }

}
