import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character/character.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
    character: any = [];

  constructor(private characterService: CharacterService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.characterService.getCharacter(params['id'])
        .subscribe((data: any) => {
          this.character = data;
        });
    });
  }
ngOnInit(){
}



}
