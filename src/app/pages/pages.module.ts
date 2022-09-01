import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroPokesComponent } from './components/utils/hero-pokes/hero-pokes.component';
import { TitleComponent } from './components/elements/title/title.component';

@NgModule({
  declarations: [PagesComponent, HomeComponent, NavbarComponent, HeroPokesComponent, TitleComponent],
  imports: [CommonModule, PagesRoutingModule, FormsModule, ReactiveFormsModule],
})
export class PagesModule {}
