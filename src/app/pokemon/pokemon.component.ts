import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { SaveService } from '../save.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  selectedPokemons = ['Ditto', 'Charmander', 'Blastoise'];

  constructor() {}

  ngOnInit(): void {}
}
