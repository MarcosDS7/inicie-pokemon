import { SidebarService } from './../../../../services/sidebar/sidebar.service';
import { Pokemon } from './../../../../models/pokemons.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-poke',
  templateUrl: './card-poke.component.html',
  styleUrls: ['./card-poke.component.scss'],
})
export class CardPokeComponent {
  @Input() pokemon: Pokemon = {} as Pokemon;

  constructor(private sidebarService: SidebarService) {}

  changeSidebar(): void {
    this.sidebarService.changeSidebar(this.pokemon);
  }
}
