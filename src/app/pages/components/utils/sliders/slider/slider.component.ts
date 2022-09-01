import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemons.model';
import SwiperCore, { Autoplay, Grid, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation, Grid]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() receiveList: Pokemon[] = [];
}
