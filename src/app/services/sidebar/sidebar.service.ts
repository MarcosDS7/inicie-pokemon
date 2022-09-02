import { Pokemon } from 'src/app/models/pokemons.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public pokemon: Pokemon = {} as Pokemon;
  sidebar: boolean;

  constructor() {
    this.sidebar = false;
  }

  changeSidebar(pokemon: Pokemon) {
    this.sidebar = !this.sidebar;
    this.pokemon = pokemon;
  }
}
