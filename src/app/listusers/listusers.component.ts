import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms/src/forms";

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  listUsers;
  constructor(private reposilistUserstories: ProfileService) { }

  ngOnInit() {  
    //this.reposilistUserstories.getProfileSavedUsers()
  }

}
