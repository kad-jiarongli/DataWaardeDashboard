import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-readable',
  templateUrl: './machine-readable.component.html',
  styleUrls: ['./machine-readable.component.css']
})
export class MachineReadableComponent implements OnInit {
  machRead:boolean;

  constructor() {
    this.machRead=true
   }

  ngOnInit(): void {
  }

}
