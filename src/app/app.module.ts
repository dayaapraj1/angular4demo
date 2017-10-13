import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { LoginComponent } from './login/login.component';
//import { AlertService, AuthenticationService } from './../service/index';
//import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
 
    
  ],
  imports: [
    BrowserModule,
	HttpModule
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
