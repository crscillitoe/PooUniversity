import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'poo-card',
  templateUrl: './poo-card.component.html',
  styleUrls: ['./poo-card.component.css']
})
export class PooCardComponent implements OnInit {

  @Input() pooNumber: string;

  constructor() { }

  ngOnInit() {
  }

  opGG() {
    window.open(`https://na.op.gg/summoner/userName=peepee%20poopoo%20${this.pooNumber}`);
  }
}
