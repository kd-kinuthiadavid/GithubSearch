import { Component,   Input, Output } from '@angular/core';
import { Http, Response} from '@angular/http';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import{ GithubService} from './github/github.service';
import {accountComponent} from './account/account.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
userName:string
  details:any=[];

  constructor(private user:GithubService){}

findUser(){
this.user.getUser().subscribe(
  details=>{console.log(details)
  this.details=details;
})
}

}
