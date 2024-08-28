import { Component, OnInit ,AfterViewInit, ViewChild} from '@angular/core';
import {
  animate,
  group,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import WaveSurfer from 'wavesurfer.js';
import { F } from '@angular/cdk/keycodes';
//import 'wavesurfer.js/dist/wavesurfer.css';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { TokenService } from 'src/app/services/token/token.service';
import{LogsService} from 'src/app/services/service/logs.service';
import { CallLogsResponse } from 'src/app/services/models/CallLogsResponse';
import { UserService } from 'src/app/services/services';
import { GroupeResponse } from 'src/app/services/models/groupe-response';
import { UserResponse } from 'src/app/services/models/user-response';
import { Observable } from 'rxjs/internal/Observable';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  labels: string[];
};



const ELEMENT_DATA: PeriodicElement[] = [
  {
    Id: 10,
    Detail: 'Account Executive',
    Number: '06 51 05 46 25',
    Agent: 'SEO Debate',
    Date: 'Ne',
    Content: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    Id: 10,
    Detail: 'Account Executive',
    Number: '06 51 05 46 25',
    Agent: 'SEO Debate',
    Date: 'Ne',
    Content: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    Id: 10,
    Detail: 'Account Executive',
    Number: '06 51 05 46 25',
    Agent: 'SEO Debate',
    Date: 'Ne',
    Content: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    Id: 10,
    Detail: 'Account Executive',
    Number: '06 51 05 46 25',
    Agent: 'SEO Debate',
    Date: 'Ne',
    Content: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];

@Component({
  selector: 'app-expand-table',
  standalone: true,
  imports:[MaterialModule,NgApexchartsModule,MaterialModule, CommonModule,MaterialModule, FormsModule, ReactiveFormsModule,FormsModule, ReactiveFormsModule, MaterialModule, TablerIconsModule],
  templateUrl: './expand-table.component.html',
  styleUrls: ['./expand-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AppExpandTableComponent implements OnInit { 
  user:UserResponse;
  userGroup :number;
  CallLogsResponse:CallLogsResponse[];
  role:string[];
  dataSource :CallLogsResponse[];
  columnsToDisplay = ['Id', 'Number', 'Agent', 'Date', 'Detail'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null = null;
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public doughnutChartOptions: Partial<ChartOptions> | any;
  public pieChartOptions: Partial<ChartOptions> | any;
  public areaChartOptions: Partial<ChartOptions> | any;
  selected: Date | null;
  constructor(private TokenService:TokenService,private LogsService:LogsService,private UserService:UserService) {
    this.doughnutChartOptions = {
      series: [45, 15, 27, 18, 35],
      chart: {
        id: 'donut-chart',
        type: 'donut',
        height: 350,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        foreColor: '#adb0bb',
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70px',
          },
        },
      },
      legend: {
        show: true,
        position: 'bottom',
        width: '50px',
      },
      colors: ['#5D87FF', '#ECF2FF', '#49BEFF', '#E8F7FF', '#FFAE1F'],
      tooltip: {
        theme: 'dark',
        fillSeriesColor: false,
      },
    };
    this.areaChartOptions = {
      series: [
        {
          name: 'Site A',
          data: [0, 300, 100, 200, 1200, 100, 500, 100],
        },
        {
          name: 'Site  B',
          data: [0, 500, 600, 800, 2800, 900, 800, 2200],
        },
      ],
      chart: {
        fontFamily: 'inherit',
        foreColor: '#a1aab2',
        height: 300,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 3,
      },
      stroke: {
        curve: 'smooth',
        width: '2',
      },
      colors: ['#398bf7', '#06d79c'],
      legend: {
        show: false,
      },
      grid: {
        show: true,
        strokeDashArray: 0,
        borderColor: 'rgba(0,0,0,0.1)',
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: 'category',
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      tooltip: {
        theme: 'dark',
      },
    };

  }
  private wavesurfer: WaveSurfer;

    ngOnInit(): void { 

        this.wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'grey',
            progressColor: 'black',
            cursorWidth: 1,
            cursorColor: 'red',
            height: 20
        });
        this.wavesurfer.load("../assets/alien_danger.wav");
        this.UserService.findUserById(this.TokenService.getUserId()).subscribe((user: UserResponse) => {
          this.user = user;
          //this.userGroup=user.groupe.id;
        });
      
        this.role=this.TokenService.userRoles;
        if (this.role.at(0)=='Admin'){
          this.getAllCallLogs();
        }else if(this.role.at(0)=='Supervisor'){
          this.getGroupeCallLogs(this.userGroup);
        }
    }
  getGroupeCallLogs(UserId:number ) {
    this.LogsService.findGroupCallLogs(UserId).subscribe({next:(calls: CallLogsResponse[])=>{
      this.CallLogsResponse=calls;
    this.dataSource= this.CallLogsResponse;} })
  
  }
  getAllCallLogs() {
this.LogsService.findAllCallLogs().subscribe({next:(calls: CallLogsResponse[])=>{
  this.CallLogsResponse=calls;
this.dataSource= this.CallLogsResponse;} })}

    togglePlay() {
        if (this.wavesurfer.isPlaying()) {
            this.wavesurfer.pause();
        } else {
            this.wavesurfer.play();
        }
    }

  
  playSound(){
    let audio=new Audio();
    audio.src="../assets/alien_danger.wav";
    audio.load();
    audio.play();
  } 
  showStats: boolean = false;
  showFilter: boolean=false;
  toggleStats(): void {
    this.showStats = !this.showStats;}
  toggleFilter():void{
      this.showFilter=!this.showFilter;
    }
    
}

export interface PeriodicElement {
  Number: string;
  Detail: string;
  Id: number;
  Agent: string;
  Date: string;
  Content: string;
}
