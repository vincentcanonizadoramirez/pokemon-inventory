import { Component, IterableDiffers, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Pokemon } from '../pokemon.interface';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  options = ['Vincent', 'Duni', 'Dino'];

  currentPokemon = '';

  pokemons: Pokemon[] = [];

  formGroup: FormGroup | any;

  filteredPokemons: any;

  constructor(
    private pokemonService: PokemonService,
    private formBuilder: FormBuilder // public formGroup: FormGroup
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getPokemons();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      pokemon: [''],
    });
    this.formGroup.get('pokemon').valueChanges.subscribe((res: any) => {
      console.log('data is ', res);
      this.filterPokemon(res);
      this.currentPokemon = res.toLowerCase();
    });
  }

  filterPokemon(enteredPokemon: string) {
    // this.filteredPokemons = this.pokemons;
    // console.log(this.filteredPokemons);
    this.filteredPokemons = this.pokemons.filter((item) => {
      return item.name.toLowerCase().indexOf(enteredPokemon.toLowerCase()) > -1;
    });
  }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe((pokemons: any) => {
      this.pokemons = pokemons.results;
      this.filteredPokemons = pokemons.results;
      // console.log(this.pokemons);
    });
  }
}
