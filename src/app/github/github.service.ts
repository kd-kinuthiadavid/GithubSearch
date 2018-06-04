import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { User } from '../user';
import { Repos } from '../repos';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
 private apiUrl :string = environment.apiUrl;
  username:string;

  constructor(private _http: HttpClient){
    console.log('Github Service Ready...');
    this.username =  'kd-kinuthiadavid';

  }
  getUser(){
    return this._http.get("https://api.github.com/users/"+this.username+'?access_token=faebeae9d1da6054be658bf567bc1a8b2f930b8a'+this.apiUrl)
    .map(result=>result)

  }
  getRepos(){
    return this._http.get("https://api.github.com/users/"+this.username+'/repos'+'?access_token=faebeae9d1da6054be658bf567bc1a8b2f930b8a'+this.apiUrl)
    .map(result=>result)
}
updateUser(username:string){
  this.username = username;
}
}
