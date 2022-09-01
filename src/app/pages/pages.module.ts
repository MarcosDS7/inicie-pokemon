import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagesComponent, HomeComponent],
  imports: [CommonModule, PagesRoutingModule, FormsModule, ReactiveFormsModule],
})
export class PagesModule {}
