import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { SaveService } from '../save.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon?: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private saveService: SaveService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    console.log(name);
    this.pokemonService.getPokemon(name).subscribe((pokemon) => {
      this.pokemon = pokemon;
      console.log(pokemon);
    });
  }

  savePokemon(name: string): void {
    // console.log(`Saved Pokemon is ${this.pokemon?.name}`);
    this.saveService.savePokemon(this.pokemon?.name);
  }

  // goBack(): void {
  //   this.location.back();
  // }
}
