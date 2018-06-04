import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github/github.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: any=[];
  repos: any=[];
  username:string;
  constructor(private _githubService: GithubService) {
  this._githubService.getUser().subscribe(user => {
    console.log)(user);
    this.user = user;
  })
}
this._githubService.getRepos().subscribe(repos =>{
  this,repos = repos;
})

  ngOnInit() {
  }
  searchUser(){
    this._githubService.updateUser(this.username);
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    })
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }

}
