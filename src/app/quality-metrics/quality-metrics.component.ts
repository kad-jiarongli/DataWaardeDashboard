import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quality-metrics',
  templateUrl: './quality-metrics.component.html',
  styleUrls: ['./quality-metrics.component.css']
})
export class QualityMetricsComponent implements OnInit {
  suValue:number;
  ufValue:string;
  starRating:boolean;
  machRead: boolean

  constructor() {
    this.suValue=99.8;
    this.ufValue="daily";
    this.starRating=true;
    this.machRead=true;
   }

  ngOnInit(): void {
  }

}
