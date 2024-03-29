import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  angForm: FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private us: UsersService, private fb: FormBuilder) { }
  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductPrice: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.us.editUser(params['id']).subscribe(res => {
          this.product = res;
      });
    });
  }
  updateUser(FirstName, LastName, Email, id) {
    this.route.params.subscribe(params => {
      this.us.updateUser(FirstName, LastName, Email, params.id);
      this.router.navigate(['users']);
    });
  }
}
