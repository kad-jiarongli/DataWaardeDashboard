import { Component, OnInit } from '@angular/core';
import {SparqlService} from '../sparql.service';
import {Subject} from 'rxjs';
import {CommoninfoBinding } from '../model/binding';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  results$: Subject<CommoninfoBinding>;

  constructor(public sparql: SparqlService) { 
    this.results$ = this.sparql.commonInfo$
  }

  ngOnInit(): void {
    this.sparql.getCommoninfo();
    this.sparql.commonInfo$.subscribe(results => {
      console.log(results);
    })

  }

}
