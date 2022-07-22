import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { BikeListUpdateComponent } from './bike-list-update/bike-list-update.component';
import { BikeListsComponent } from './bike-lists/bike-lists.component';
import { BookingBikeComponent } from './booking-bike/booking-bike.component';
import { CreateBikeComponent } from './create-bike/create-bike.component';
import { CreateTableBikeComponent } from './create-table-bike/create-table-bike.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserEntityComponent } from './user-entity/user-entity.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'bikes', component: BikeListsComponent },
  { path: 'details/:id', component: BikeDetailsComponent },
  { path: 'createBike', component: CreateBikeComponent },
  { path: 'table', component: CreateTableBikeComponent },
  { path: 'update/:id', component: BikeListUpdateComponent },
  { path: 'bookBike', component: BookingBikeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'usersList', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-interface',component:UserEntityComponent},
  { path: 'home',component:NavbarComponent },
  { path: 'profile',component:ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
