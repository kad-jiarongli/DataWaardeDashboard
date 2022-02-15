import { Component, OnInit } from '@angular/core';
import { SparqlService } from '../sparql.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {
  licensesResults$: Subject<any[]>;

  constructor(public sparql: SparqlService) {
    this.sparql.getLicenses();
    this.sparql.licenses$.subscribe(results => {
      console.log(results);
    });
    this.licensesResults$ = this.sparql.licenses$;
   }

  ngOnInit(): void {
  }

}
