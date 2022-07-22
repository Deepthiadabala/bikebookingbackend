import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:any;
  registereduser:any;
  submitted=false;
  loggedinuser:any;
  userLoginForm : FormGroup;
  notFound!: boolean; 
  employeService: any;
  dialogRef: any;
  route: any;
  

  constructor(private userservice:UserService,private fb:FormBuilder, private router: Router, private cookieService:CookieService  ) { }

  ngOnInit(): void {

  //   this.userservice.getUsersList().subscribe((result: any)=>{
  //     this.users=result;
  //     console.log(result);

  // })
  this.userLoginForm=this.fb.group({
    userName:['', [Validators.required]],
    password:['']
  })
}

 

  onSubmit(){
    if (this.userLoginForm.invalid) {
      return;
    }else{
      this.notFound = false;
    // this.click = true;
    this.userservice.getUser(this.userLoginForm.value.userName).subscribe(
      (data) => {
        if(data.password == this.userLoginForm.value.password && 
          data.userName == this.userLoginForm.value.userName
          ){
            this.cookieService.set('isuserLoggedIn', 'true');
            this.cookieService.set('userId',`${data.userId}`);
            this.router.navigate(['/user-interface']);
          }else{
            alert("logIn failed");
            // (error: any) =>{
            //   if(error?.status == 404){
            //     //this.notFound = true;
              
            //     alert("logIn failed")
            //   }
          //}
        }
      }
    );
    
    }
    }
  
}
