import { PokemonList } from './../../../pages/models/pokemon.model';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  URL: string = environment.api.base;
  body: {} = {};
  httpHeader: {};

  constructor(private httpClient: HttpClient) {
    this.httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getPokemonsList(limit: number): Observable<{ results: PokemonList[] }> {
    const method = '?limit=' + limit;
    return this.httpClient.get<{ results: PokemonList[] }>(
      `${this.URL}${method}`,
      this.httpHeader
    );
  }
}
