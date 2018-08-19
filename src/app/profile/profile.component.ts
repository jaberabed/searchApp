import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms/src/forms";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  repositories;
  username:string;
  name: string;
  image:string;
  errorMessage: string;
  constructor(private profileService: ProfileService) {
  }
  findProfile() {
    this.profileService.updateProfile(this.username);

    this.repositories = this.profileService.getProfileRepositories()
    .subscribe(res => 
    this.repositories = res);
  }
  postProfile(name,image) { 
    debugger
    this.profileService.postProfileRepositories(name,image);
}
getProfile(){
  // this.repositories =this.profileService.getProfileSavedUsers()
  // .subscribe(res =>
  //   this.repositories = res);
  this.profileService.getProfileSavedUsers();
}

  ngOnInit() {
       this.repositories = this.profileService.getProfileRepositories()
       .subscribe(res => 
       this.repositories = res); 
  }
  
 
}

