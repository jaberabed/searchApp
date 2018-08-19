
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operator/map';
export class Users {
  name: string;
  image: string;
}
@Injectable()
export class ProfileService {

  private username: string;
  private name: string;
  private image: string;
  employeeList: Users[];
  //private userObject: Object;
  constructor(private http: Http) {
    this.username = 'YOUR_SEARCH_KEYWORD';

  }
  getProfileRepositories() {
    return this.http.get("https://api.github.com/search/repositories?q=" + this.username
    ).map(res => res.json());
  }
  updateProfile(username: string) {
    this.username = username;
  }
  postProfileRepositories(name: string, image: string) {
    var body = ({name:name,image:image});
    const req = this.http.post('http://localhost:50023/api/Bookmark/AddBookmark',body,{
      })
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log("Error occured"); 
          }
        );
    }
  getProfileSavedUsers() {
    
    const req = this.http.get('http://localhost:50023/api/Bookmark/GetBookmarks')
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log("Error occured");   
          }
        );
  }
}
