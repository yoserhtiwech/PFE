import { Component, ViewChild } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ChartComponent,
  NgApexchartsModule
} from "ng-apexcharts";
import { MaterialModule } from "src/app/material.module";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: any;
};

@Component({
  selector: "app-heatmap",
  standalone: true,
  templateUrl: "./heatmap.component.html",
  imports: [NgApexchartsModule, MaterialModule],
  styleUrls: ["./heatmap.component.scss"]
})
export class heatmapComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions!: Partial<ChartOptions>|any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Metric1",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric2",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Dimanche",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Samedi",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Vendredi",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Jeudi",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Marcredi",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Mardi",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Lundi",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#008FFB"],
     /*  title: {
        text: "HeatMap Chart (Single color)"
      } */
    };
  }

  public generateData(count: number, yrange: { min: any; max: any; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
}
