import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
//import { FormsModule } from '@angular/forms';
import { BikeListsComponent } from './bike-lists/bike-lists.component';
import { BikeService } from './bike.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { CreateBikeComponent } from './create-bike/create-bike.component';
import { CreateTableBikeComponent } from './create-table-bike/create-table-bike.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BikeListUpdateComponent } from './bike-list-update/bike-list-update.component';
import { BookingBikeComponent } from './booking-bike/booking-bike.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserListComponent } from './user-list/user-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';
import { UserEntityComponent } from './user-entity/user-entity.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import {MatMenuModule} from '@angular/material/menu';
//import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ProfileComponent } from './profile/profile.component';





@NgModule({
  declarations: [
    AppComponent,
    BikeListsComponent,
    BikeDetailsComponent,
    CreateBikeComponent,
    CreateTableBikeComponent,
    BikeListUpdateComponent,
    BookingBikeComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    UserListComponent,
    MyBookingsComponent,
    UserEntityComponent,
    UserNavbarComponent,
    //ProfileComponentComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    Ng2SearchPipeModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule
    
  ],
  providers: [BikeService,CookieService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
