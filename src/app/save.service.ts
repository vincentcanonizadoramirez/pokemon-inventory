import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaveService {
  constructor() {}

  savePokemon(name: any) {
    console.log(`Saved Pokemon is ${name}`);
  }
}
