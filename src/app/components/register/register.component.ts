import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserModel } from '../models/usuario.model';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel = new UserModel();
  remember = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  
  }

  onSubmit( form: NgForm){


  if(!form.invalid){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Wait a moment, please...'
    });
    Swal.showLoading();

    this.auth.newUser(this.user)
      .subscribe( resp => {
        console.log(resp);

        if(this.remember){
          localStorage.setItem('email', this.user.email);
        }


        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl('/login');
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
