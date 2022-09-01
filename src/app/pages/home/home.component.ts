import { PokemonList } from './../models/pokemon.model';
import { PokemonService } from './../../core/services/api/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listPokemons: PokemonList[] = [];

  constructor(
    private fb: FormBuilder,
    private pokemonService: PokemonService
  ) {}

  form = this.fb.group({
    search_pokemon: ['', Validators.required],
  });

  ngOnInit(): void {
    this.returnPokemonsList();
  }

  returnPokemonsList(): void {
    this.pokemonService.getPokemonsList(10).subscribe({
      next: (respose) => {
        this.listPokemons = respose.results;
        console.log(respose);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onSubmit(input: HTMLInputElement) {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
      input.focus();
    } else {
      return;
    }
  }
}
