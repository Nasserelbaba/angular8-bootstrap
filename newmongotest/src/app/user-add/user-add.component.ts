import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private us: UsersService) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      FirstName: [''],
      LastName: [''],
      Email : [''],
      Password: ['']
    });
    

  }
  addUser(FirstName,LastName,Email, Password) {
    this.us.addUser(FirstName,LastName,Email, Password);
  
  }
  ngOnInit() {
  }

}
