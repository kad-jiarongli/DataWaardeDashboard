import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keywords-themes',
  templateUrl: './keywords-themes.component.html',
  styleUrls: ['./keywords-themes.component.css']
})
export class KeywordsThemesComponent implements OnInit {
  keywords: string [];
  themes: string [];


  constructor() { 
    this.keywords=[
      "BAG",
      "Nederland",
      "Basisregistratie Adressen en Gebouwen",
      "Nederland",
      "adresseerbaar objec",
      "e-government",
      "gebouw",
      "BAG",
      "Nederland",
      "Basisregistratie Adressen en Gebouwen",
      "Nederland",
      "adresseerbaar objec",
      "e-government",
      "gebouw"
    ]
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
