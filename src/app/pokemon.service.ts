import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private _baseURL: string = 'https://pokeapi.co/api/v2/pokemon/';
  private _url: string = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this._baseURL}?limit=100000&offset=0`);
    // return this.http.get<Pokemon[]>(this._url);
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this._baseURL}${name}`);
  }
}
