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
import { HomePageComponent } from './home-page/home-page.component';
import { ChartComponent } from './chart/chart.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserGetComponent,
    UserEditComponent,
    SidebarComponent,
    SignInComponent,
    HomePageComponent,
    ChartComponent,
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
