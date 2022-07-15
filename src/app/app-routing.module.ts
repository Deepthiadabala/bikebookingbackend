import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { BikeListsComponent } from './bike-lists/bike-lists.component';
import { CreateBikeComponent } from './create-bike/create-bike.component';
import { CreateTableBikeComponent } from './create-table-bike/create-table-bike.component';

const routes: Routes = [
  { path: '', redirectTo: 'bikes', pathMatch: 'full' },
  { path: 'bikes', component: BikeListsComponent },
  { path: 'details/:id', component: BikeDetailsComponent },
  { path: 'createBike', component: CreateBikeComponent },
  { path: 'table', component: CreateTableBikeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
