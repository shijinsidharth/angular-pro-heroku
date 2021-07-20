import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { IfassignmentComponent } from './ifassignment/ifassignment.component';
import { SwitchassignmentComponent } from './switchassignment/switchassignment.component';
import { ArrayComponent } from './array/array.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IfassignmentComponent,
    SwitchassignmentComponent,
    ArrayComponent,
    RegistrationComponent,
    DisplaydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
