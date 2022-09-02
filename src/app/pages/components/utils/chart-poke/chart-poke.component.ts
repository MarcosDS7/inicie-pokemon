import { Pokemon } from 'src/app/models/pokemons.model';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-chart-poke',
  templateUrl: './chart-poke.component.html',
  styleUrls: ['./chart-poke.component.scss'],
})
export class ChartPokeComponent implements OnChanges {
  @Input() pokemon: Pokemon = {} as Pokemon;
  chart: ApexCharts = {} as ApexCharts;
  chartOptions: {} = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (
      Object.keys(this.pokemon).length > 0 &&
      Object.keys(changes['pokemon'].previousValue).length === 0
    ) {
      this.renderChart();
    }
    if (
      Object.keys(this.pokemon).length > 0 &&
      Object.keys(changes['pokemon'].previousValue).length > 0
    ) {
      this.chart.updateSeries([
        {
          data: changes['pokemon'].currentValue.data,
        },
      ]);
    }
  }
  renderChart() {
    this.chartOptions = {
      series: [
        {
          data: this.pokemon.data,
        },
      ],

      chart: {
        type: 'bar',
        height: 260,
        fontFamily: 'Nunito, Arial, sans-serif',
        foreColor: '#B3B4B5',
      },

      plotOptions: {
        bar: {
          columnWidth: '60%',
          distributed: true,
          borderRadius: 3,
        },
      },

      toolbar: {
        show: false,
      },

      title: {
        text: 'Status',
        style: {
          fontSize: '16px',
          fontWeight: 700,
          color: '#2F3E77',
        },
      },

      xaxis: {
        categories: ['Vida', 'Defesa', 'Velocidade', 'Ataque'],
      },

      colors: ['#C3F788', '#F7802A', '#49D0B0', '#EA686D'],

      dataLabels: {
        enabled: false,
      },

      fill: {
        type: 'solid',
      },

      legend: {
        show: false,
      },
    };

    this.chart = new ApexCharts(
      document.getElementById('chart'),
      this.chartOptions
    );

    this.chart.render();
  }
}
