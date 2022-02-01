import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-frequency',
  templateUrl: './update-frequency.component.html',
  styleUrls: ['./update-frequency.component.css']
})
export class UpdateFrequencyComponent implements OnInit {
  ufValue:string

  constructor() {
    this.ufValue="daily"
   }

  ngOnInit(): void {
  }

}
