import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private rouer: Router) { }

  ngOnInit() {
  }

  logout() {
   this.auth.logout();
   this.rouer.navigateByUrl('/login')
  }
}
