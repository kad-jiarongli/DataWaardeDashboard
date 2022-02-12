import { Component, OnInit } from '@angular/core';
import { SparqlService } from '../sparql.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  licensesResults$: Subject<any[]>;
  provenanceResult$: Subject<any>;
  

  constructor(public sparql: SparqlService) {
    this.sparql.getLicenses();
    this.sparql.getProvenance();
    this.sparql.licenses$.subscribe(results => {
      console.log(results);
    });
    this.sparql.provenance$.subscribe(results => {
      console.log(results);
    });
    this.licensesResults$ = this.sparql.licenses$;
    this.provenanceResult$ = this.sparql.provenance$;
    
   }

  ngOnInit(): void {
  }

}
