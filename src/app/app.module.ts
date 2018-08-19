import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './services/profile.service';
import { HttpModule } from '@angular/http';
import { ListusersComponent } from './listusers/listusers.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListusersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }    
