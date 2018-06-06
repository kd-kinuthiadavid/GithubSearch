import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { User } from '../user';
import { Repos } from '../repos';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
 // private apiUrl :boolean = environment.apiUrl;
  username:string;

  constructor(private _http: HttpClient){
    console.log('Github Service Ready...');
    this.username =  'GituMbugua';

  }
  getUser(){
    return this._http.get("https://api.github.com/users/"+this.username+'?access_token=')
    .map(result=>result)

  }
  getRepos(){
    return this._http.get("https://api.github.com/users/"+this.username+'/repos'+'?access_token=')
    .map(result=>result)
}
updateUser(username:string){
  this.username = username;
}
}
