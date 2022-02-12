import { Component, OnInit } from '@angular/core';
import { SparqlService } from '../sparql.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-keywords-themes',
  templateUrl: './keywords-themes.component.html',
  styleUrls: ['./keywords-themes.component.css']
})
export class KeywordsThemesComponent implements OnInit {
  // keywords: string [];
  themes: string[];
  keywordsResults$: Subject<any[]>;
  themesResults$: Subject<any[]>;


  constructor(public sparql: SparqlService) {

    this.sparql.getThemes();
    this.sparql.getKeywords();
    this.sparql.keywords$.subscribe(results => {
      console.log(results);
    });
    this.sparql.themes$.subscribe(results => {
      console.log(results);

    })
    this.keywordsResults$ = this.sparql.keywords$;
    this.themesResults$ = this.sparql.themes$;
    // this.keywords=[
    //   "BAG",
    //   "Nederland",
    //   "Basisregistratie Adressen en Gebouwen",
    //   "Nederland",
    //   "adresseerbaar objec",
    //   "e-government",
    //   "gebouw",
    //   "BAG",
    //   "Nederland",
    //   "Basisregistratie Adressen en Gebouwen",
    //   "Nederland",
    //   "adresseerbaar objec",
    //   "e-government",
    //   "gebouw"
    // ]
    this.themes = [
      "location",
      "planningCadastre",
      "bu",
      "structure",
      "national"
    ]
  }

  ngOnInit(): void {
  }

}
