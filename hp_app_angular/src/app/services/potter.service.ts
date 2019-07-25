import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//RxJs
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

//Models
import { Character } from '../model/character';
import { Wand } from '../model/wand';
import { CharacterDto } from '../model/character-dto';




@Injectable()
export class PotterService {

  apiUrl = 'http://hp-api.herokuapp.com/api/';
  

  constructor(private _http: HttpClient) {
    console.log("Servicio inicializado")
   }


   characters(): Observable<Character[]> {
     return this._http.get(`${this.apiUrl}characters`)
     .pipe(
      map( (characters: CharacterDto[]) => {
        return characters.map( (character: CharacterDto) => {
          let wand = new Wand(character.wand.wood, character.wand.length, character.wand.core);
          return new Character(
            character.name,
            character.image,
            character.house,
            character.patronus,
            character.ancestry,
            character.dateOfBirth,
            character.actor,
            character.alive,
            wand)
        })
      })
     );
   }

   
}
