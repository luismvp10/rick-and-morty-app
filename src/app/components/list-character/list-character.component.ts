import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character/character.service';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css']
})
export class ListCharacterComponent implements OnInit {

  currentPage: number = 1;
  characters: any = [];
  totalPages: number = 0;
  params: any = [];
  /*Filters*/
  SelectedStatus: string;
  SelectedGender: string;
  nameCharacter: string;


  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters(this.currentPage);
    /*Input function*/
    const nameSearch = document.getElementById('name');
    fromEvent(nameSearch, 'input').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      filter(text => text.length > 2 ),
      debounceTime(15),
      distinctUntilChanged(),
    ).subscribe((text: string) => {
        this.nameCharacter = text;
        this.params = [];
        this.getCharacters(this.currentPage);
    });

  }

  getCharacters(numberPage: number) {
    this.params.push({
      page: this.currentPage,
      name: this.nameCharacter,
      status: this.SelectedStatus,
      gender: this.SelectedGender
    });

    this.characters = [];
    this.characterService.getCharacters(this.params)
      .subscribe(( data: any) => {
        this.totalPages = data.info.pages;
        this.characters = data.results;
      }, (error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Connection error',
          text: error.statusText
        });
  
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

    this.getCharacters(this.currentPage);
  }

  changeStatus(value) {
    this.SelectedStatus = value;
    this.params = [];

    this.getCharacters(this.currentPage);
  }
  changeGender(value) {
    this.SelectedGender = value;
    this.params = [];

    this.getCharacters(this.currentPage);
  }

  counter(i: number) {
    return new Array(i);
  }

 

}
