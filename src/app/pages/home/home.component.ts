import { SidebarService } from './../../services/sidebar/sidebar.service';
import { Pokemon } from './../../models/pokemons.model';
import { pokemonList } from './../../mocks/pokemons.mock';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('search_poke') search_poke: ElementRef = {} as ElementRef;
  listPokemons: Pokemon[] = pokemonList;
  listFiltered: Pokemon[] = pokemonList;
  search_pokemon_notfound: boolean = false;
  _filterBy: string = '';

  constructor(private sidebarService: SidebarService) {}

  search(index: number) {
    if (this.listFiltered.length > 0) {
      this.sidebarService.changeSidebar(this.listFiltered[index]);
      this.search_poke.nativeElement.value = '';
      this.search_pokemon = '';
      this.search_poke.nativeElement.focus();
    } else {
      this.search_pokemon_notfound = true;
      setTimeout(() => (this.search_pokemon_notfound = false), 3000);
      return;
    }
  }

  set search_pokemon(value: string) {
    if (value) {
      this._filterBy = value;
      this.listFiltered = this.listPokemons
        .sort((a, b) => {
          return a.name < b.name ? -1 : 1;
        })
        .filter(
          (name) =>
            name.name.toLowerCase().indexOf(value.toLocaleLowerCase()) > -1
        );
    } else {
      this.listFiltered = [];
    }
  }

  get search_pokemon() {
    return this._filterBy;
  }
}
