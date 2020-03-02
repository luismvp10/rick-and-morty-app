import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../services/episode/episode.service';
import { CharacterService } from '../../services/character/character.service';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-episode',
  templateUrl: './list-episode.component.html',
  styleUrls: ['./list-episode.component.css']
})
export class ListEpisodeComponent implements OnInit {
  currentPage: number = 1;
  episodes: any = [];
  totalPages: number = 0;
  params: any = [];
  charactersUrl: any[];
  characters: any[];
  /*Filters*/
 /*  numberEpisode: string; */



  constructor(private episodeService: EpisodeService, private characterService: CharacterService) { }

  ngOnInit() {
    this.getEpisodes(this.currentPage);
  }

  getEpisodes(numberPage: number){

    this.params.push({
      page: this.currentPage,
/*       number: this.numberEpisode, */
 
    });
    this.episodes = [];

    this.episodeService.getEpisodes(this.params)
        .subscribe((data:any)=> {
       
          this.totalPages = data.info.pages;
          this.episodes = data.results;
        }, (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Connection error',
            text: error.statusText
          });
        });
  }

  getCharacters(id: number){
    this.charactersUrl = this.episodes[id].characters;
    const observablesList = [];
    this.charactersUrl.forEach( element => {
        observablesList.push(this.characterService.getOneCharacter(element));
    });
    forkJoin(observablesList).subscribe(results => {
        this.characters = results;
    });
  }



  pagination(page: number) {

    if (page === -1 ) {
      console.log('Previous ' );
    } else if (page === -2) {
      this.currentPage = this.currentPage + 1;
    } else {
      this.currentPage =  page;
    }
    this.params = [];
    this.getEpisodes(this.currentPage);
   
  }


  counter(i: number) {
    return new Array(i);
  }

  
/*   changeNumberEpisode(value) {
    this.numberEpisode = value;
    this.params = [];
    this.getEpisodes(this.currentPage);
  } */



}
