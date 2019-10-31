import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserGetComponent } from './user-get/user-get.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChartComponent } from './chart/chart.component';


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
  },
  {
    path :"home", 
    component:HomePageComponent
  },
  {
    path : 'chart',
    component:ChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
