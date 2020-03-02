import {Component, OnInit} from '@angular/core';
import { RouterModule, Router, NavigationEnd, UrlTree } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  loading:boolean = false;
  public hideElement = true;
  auth:boolean = false;

  constructor(){
    // this.router.events.subscribe(event => {
    // /*   console.log(event ) */
    //   if (event instanceof NavigationEnd) {
    //   /*   console.log(event ); */
    //     if (event.url.match('/login') || event.url.match('/register')) {
    //  /*      console.log("Here"); */
    //       if(!authService.isAunthentificated){
    //         this.auth=false;
    //       }
    //       this.hideElement = true;
    //       /* console.log("url login") */
    //   } if(event.url.match('/home')){
    //
    //     this.auth = true;
    //     this.hideElement = false;
    //   }
    // }
    //
    // });
  }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    },2000);
  }
}
