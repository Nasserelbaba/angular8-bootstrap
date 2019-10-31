import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import User from '../User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  angForm: FormGroup;
  user :User;
  constructor(private fb: FormBuilder, private us: UsersService,private router : Router ) {
  this.createForm();
  }
  ngOnInit() {
    
  }
  createForm() {
    this.angForm = this.fb.group({
      Email : ['',Validators.required],
      Password: ['',Validators.required]
    });
    
}
checkUser(Email,Password){
  this.us.checkUser(Email,Password).subscribe((res)=>
  {if(res) {this.router.navigate(['/home']);} else {console.log("user not exist!!!");}});
  };

/* checkUser(Email,Password){
  this.us.checkUser(Email,Password).subscribe( () => {
    console.log(212);
  });}; */
}



