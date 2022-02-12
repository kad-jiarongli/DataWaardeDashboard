import { MeasurementBinding,CommoninfoBinding } from './../model/binding';
import { Component, OnInit } from '@angular/core';
import {SparqlService} from '../sparql.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-quality-metrics',
  templateUrl: './quality-metrics.component.html',
  styleUrls: ['./quality-metrics.component.css']
})
export class QualityMetricsComponent implements OnInit {
  mWmsResult$: Subject<MeasurementBinding>;
  commoninfoResult$: Subject<CommoninfoBinding>;

  constructor(public sparql: SparqlService) {
    this.mWmsResult$ = this.sparql.measurementWms$;
    this.commoninfoResult$=this.sparql.commonInfo$;
    
   }

  ngOnInit(): void {
    this.sparql.getMeasurement();
    this.sparql.getCommoninfo();
    
    this.sparql.measurementWms$.subscribe(results => {
      console.log(results);
    
  });
  
}


}
