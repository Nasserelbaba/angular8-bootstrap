import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserGetComponent } from './user-get/user-get.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {
    path: 'users',
    component:UserAddComponent
  },
  {
    path: 'usersshow',
    component: UserGetComponent
  },
  {
    path: 'edit/:id',
    component: UserEditComponent
  },{
    path:'sidebar' ,
    component:SidebarComponent
  },{
    path:"signin" ,
    component:SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
