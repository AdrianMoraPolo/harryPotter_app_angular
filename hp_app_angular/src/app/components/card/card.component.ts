import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../model/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit() {
    console.log(this.character)
  }

}
