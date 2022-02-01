import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-uptime',
  templateUrl: './service-uptime.component.html',
  styleUrls: ['./service-uptime.component.css']
})
export class ServiceUptimeComponent implements OnInit {

  suValue:number;

  constructor() { 
    this.suValue=99.8
  }

  ngOnInit(): void {
  }

}
