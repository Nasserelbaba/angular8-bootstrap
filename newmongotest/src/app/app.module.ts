import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAddComponent } from './user-add/user-add.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserGetComponent } from './user-get/user-get.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserGetComponent,
    UserEditComponent,
    SidebarComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
