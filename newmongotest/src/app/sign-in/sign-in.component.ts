import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private us: UsersService) {
  this.createForm();
  }
  ngOnInit() {
  }
  createForm() {
    this.angForm = this.fb.group({
      FirstName: [''],
      LastName: [''],
      Email : [''],
      Password: ['']
    });
    
}
checkUser(Email){
  this.checkUser(Email);
}
/* if (checkUser(Email)) {
  
} */
};


