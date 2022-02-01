import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  titleName:string;

  constructor() { 
    this.titleName= "Basisregistraties Adressen en Gebouwen";
  }

  ngOnInit(): void {

  }

}
