import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { UsersService } from '../users.service';
import User from '../User';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  angForm: FormGroup;
  user :User;
  constructor(private fb: FormBuilder, private us: UsersService) {
  this.createForm();
  }
  ngOnInit() {
    
  }
  createForm() {
    this.angForm = this.fb.group({
      Email : [''],
      Password: ['']
    });
    
}
checkUser(Email,Password){
  this.us.checkUser(Email,Password);
  };

/* checkUser(Email,Password){
  this.us.checkUser(Email,Password).subscribe( () => {
    console.log(212);
  });}; */
}



