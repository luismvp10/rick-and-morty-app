import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }
  env = environment;
  url: string = this.env.URI + '/location/';



  getLocations(params: any = []) {
    const page = params[0]['page'];
    const name = params[0]['name'];
    const type = params[0]['type'];
    const dimension = params[0]['dimension'];

    let url = this.url + '?page=' + page;
    if ( name !== undefined) {
      url +='&name=' + name;
    }
    if (type !== undefined) {
      url +='&type=' + type;
    }
    if (dimension !== undefined) {
      url +='&dimension=' + dimension;
    }
    return this.http.get(url);

  }

}
