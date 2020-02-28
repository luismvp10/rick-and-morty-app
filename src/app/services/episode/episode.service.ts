import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  env = environment
  url: string = this.env.URI + '/episode/';

  constructor(private http: HttpClient) { }

  getEpisodes(params: any[]){

    const page = params[0]['page'];
    let url = this.url + '?page=' + page;
    return this.http.get(url)
  }
 
}
