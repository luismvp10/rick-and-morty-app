import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  env = environment;
  url: string = this.env.URI + '/character/';

  
  constructor(private http: HttpClient) {}



  getCharacters(params: any= []) {

    const page = params[0]['page'];
    const name = params[0]['name'];
    const status = params[0]['status'];
    const gender = params[0]['gender'];

    let url = this.url + '?page=' + page;
    if ( name !== undefined) {
      url +='&name=' + name;
    }
    if (status !== undefined) {
      url +='&status=' + status;
    }

    if (gender !== undefined) {
      url +='&gender=' + gender;
    }

    return this.http.get(url);

  }

  getCharacter(id: number) {
    return this.http.get(this.url + id);
  }

  getOneCharacter(url: string){
      return this.http.get(url);
  }

}
