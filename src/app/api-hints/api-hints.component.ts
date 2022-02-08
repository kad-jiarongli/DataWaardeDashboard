import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { scaleOrdinal } from 'd3';

@Component({
  selector: 'app-api-hints',
  templateUrl: './api-hints.component.html',
  styleUrls: ['./api-hints.component.css']
})
export class ApiHintsComponent implements OnInit {
  multi: any[] =[
    {
      "name": "api hits",
      "series": [
        {
          name: "2021-13-01", 
          value: 12
        
        },
        {
          name: "2021-14-01", 
          value: 364
          
        },
        {
          name: "2021-15-01", 
          value: 572
          
        },
      ]
    },
  ];
  apiHits: any;
  view: [number,number] = [330, 320];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;

  colorScheme:string|Color={
    name: "exampleName",
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#b4520c','','#b547b1c','#ab2218']
  };

  constructor() {
    this.apiHits=[
      {
        name: "2021-15-01", 
        value: 572
        
      },
      {
        name: "2021-14-01", 
        value: 364
        
      },
      {
        name: "2021-13-01", 
        value: 12
      
      },
    ];
  }
  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit(): void {
    
  
  }

}
