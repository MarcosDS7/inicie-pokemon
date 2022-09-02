import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroPokesComponent } from './components/utils/hero-pokes/hero-pokes.component';
import { TitleComponent } from './components/elements/title/title.component';
import { SubTitleComponent } from './components/elements/sub-title/sub-title.component';
import { CardPokeComponent } from './components/utils/card-poke/card-poke.component';
import { SliderMainComponent } from './components/utils/sliders/slider-main/slider-main.component';
import { SwiperModule } from 'swiper/angular';
import { SliderComponent } from './components/utils/sliders/slider/slider.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartPokeComponent } from './components/utils/chart-poke/chart-poke.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    NavbarComponent,
    HeroPokesComponent,
    TitleComponent,
    SubTitleComponent,
    CardPokeComponent,
    SliderMainComponent,
    SliderComponent,
    SidebarComponent,
    ChartPokeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    NgApexchartsModule,
  ],
})
export class PagesModule {}
