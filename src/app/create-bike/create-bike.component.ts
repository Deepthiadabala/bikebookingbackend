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
  bikeForm:FormGroup;
  bike: Bike ;
  submitted = false;
  
  constructor(private bikeService: BikeService,private formbuilder: FormBuilder,
    private router: Router) { }
  
    ngOnInit(): void {

      this.bikeForm=this.formbuilder.group({
        modelName:['',[Validators.required]],
        brakes: ['',[Validators.required]],
        engineCapacity: ['',[Validators.required]],
        fuelTankCapacity:['',[Validators.required]], 
        gears: ['',[Validators.required]],
        imageUrl: ['',[Validators.required]],
        mileage:['',[Validators.required]] ,
        price: ['',[Validators.min(1),Validators.max(2000000)]],
        startingMechanism:[''],
        wheelType: [''],
        status:['',[Validators.required]]
        
        })
      
    }


    newBike(): void {
      this.submitted = false;
      this.bike = new Bike();
    }

    save() {
      this.bikeService.createBike(this.bikeForm.value)
        .subscribe(data => console.log(data), (error) => console.log(error));
      this.bike = new Bike();
      this.goToTable();
    }

    onSubmit() {
      this.submitted = true;
      console.log(this.bikeForm.value);
      this.save();    
    }
  
    goToTable() {
      this.router.navigate(['table']);
    }
    

    saveForm(){
      if(this.bikeForm.valid){
        console.log('Profile form data :: ', this.bikeForm.value);
      }
    }
    
   

}
