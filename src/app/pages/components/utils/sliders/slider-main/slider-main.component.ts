import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemons.model';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'app-slider-main',
  templateUrl: './slider-main.component.html',
  styleUrls: ['./slider-main.component.scss'],
})
export class SliderMainComponent {
  @Input() receiveList: Pokemon[] = [];
}
