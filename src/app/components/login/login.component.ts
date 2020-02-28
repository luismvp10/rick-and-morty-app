import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../models/usuario.model';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel = new UserModel();;
  remember = false;
  constructor(private auth: AuthService, private router: Router) { 

  }

  ngOnInit() {
    if(localStorage.getItem('email')){
      this.user.email = localStorage.getItem('email');
      this.remember = true;
    }
  }

  login(form: NgForm){
   
  if(!form.invalid){

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Wait a moment, please...'
    });
    Swal.showLoading();

    this.auth.login(this.user)
      .subscribe( resp => {
        console.log(resp);
        if(this.remember){
          localStorage.setItem('email', this.user.email);
        }else{
          localStorage.removeItem('email');
        }
        Swal.close();
        this.router.navigateByUrl('/home');
      },(err)=> {

        Swal.fire({
          icon: 'error',
          title: 'Authentication error',
          text: err.error.error.message
        });
        console.log(err.error.error.message);
      });
  }
  }
}
