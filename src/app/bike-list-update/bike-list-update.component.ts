import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bike } from '../bike';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bike-list-update',
  templateUrl: './bike-list-update.component.html',
  styleUrls: ['./bike-list-update.component.css']
})
export class BikeListUpdateComponent implements OnInit {
  id: number;
  bike: Bike;
  ready:boolean=false;
  submitted = false;
  
  constructor(private router: Router, private bikeService: BikeService, private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
       this.id = this.route.snapshot.params['id'];
    this.getBikeById();
      
   }
   updateForm: FormGroup;
  //  updateForm: FormGroup = this.formBuilder.group({
  //   modelName: ['', [Validators.required]]

  // });

  getBikeById() {
    this.bikeService.getBikeById(this.id).subscribe((data) => {
      console.log(data);

      this.updateForm = this.formBuilder.group({
        modelName: [data.modelName, [Validators.required]],
        brakes:[data.brakes],
        engineCapacity:[data.engineCapacity],
        gears:[data.gears],
        fuelTankCapacity:[data.fuelTankCapacity],
        imageUrl:[data.imageUrl,[Validators.required]],
        mileage:[data.mileage],
        price:[data.price],
        startingMechanism:[data.startingMechanism],
        wheelType:[data.wheelType]
      });
      this.ready=true;
      //this.submitted = true;
    
    });
  }

  onSubmit(id: number) {
    console.log(this.updateForm.value, id);
    this.bikeService.updateBike(id,this.updateForm.value).subscribe(data=>{
    this.bike = data;
    this.gotoList();
    //this.submitted = true;
    
    });
    
  }

  gotoList() {
    this.router.navigate(['/table']);
  }


}
