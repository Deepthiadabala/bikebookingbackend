import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  submitted = false;
  hide = true;
  profileForm:FormGroup;
 
  constructor(private userService: UserService, private formBuilder: FormBuilder,
    private router: Router) { }

    ngOnInit(): void {

      this.profileForm = this.formBuilder.group({
        userName: ['', [Validators.required]],
        mail: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        address: ['', [Validators.required]],
        contact: ['', [Validators.minLength(10)]],
        //gender: ['', [Validators.required]],
      });

  }

 newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

save() {
    this.userService.createUser(this.profileForm.value)
      .subscribe(data => console.log(data), (error) => console.log(error));
    this.user = new User();
    this.goToTable()
  }


  // saveForm() {
  //   if (this.profileForm.valid) {
  //     console.log('Profile form data :: ', this.profileForm.value);
  //   }
  // }

  goToTable() {
    this.router.navigate(['table']);
  }

  

 
  onSubmit() {
    this.submitted = true;
    console.log(this.profileForm.value);
    this.save();    
    this.goToTable()
  }

}
