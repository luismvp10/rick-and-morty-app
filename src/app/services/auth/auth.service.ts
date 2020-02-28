import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from '../../components/models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  env = environment;

  private url ='https://identitytoolkit.googleapis.com/v1/accounts:';
  userToken: string;
  ///Create new user
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

///Login
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]



  constructor(private http: HttpClient) { 
    this.readToken();
  }

  login(user: UserModel){
    const authData = {
      ...user,
      returnSecureToken: true
    };
    
    return this.http.post(`${ this.url }signInWithPassword?key=${ this.env.APIKEY_FIREBASE}`,authData)
            .pipe(map( resp => {
            /*   console.log("Entro en el map login"); */
              this.saveToken( resp['idToken'] );
              return resp;
             }));

  }

  newUser(user: UserModel){
    const authData = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(`${ this.url }signUp?key=${ this.env.APIKEY_FIREBASE}`,authData)
            .pipe(map( resp => {
             /*  console.log("Entro en el map new user"); */
              this.saveToken( resp['idToken'] );
              return resp;
             }));

  }

  logout(){
      localStorage.removeItem('token');
  }

  private saveToken(idToken: string){
      this.userToken = idToken;
      localStorage.setItem('token', idToken);

      let today = new Date();
      today.setSeconds( 3600 );
      localStorage.setItem('expira', today.getTime().toString() );
  }



  readToken(){
    if( localStorage.getItem('token') ){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
    return this.userToken;
  }

  isAunthentificated(): boolean {

    if( this.userToken.length < 2 ){
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if( expiraDate > new Date()){
      return true;
    }

    return this.userToken.length > 2;
  }



}
