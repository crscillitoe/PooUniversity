import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pooers: string[] = [
    '09', '68', '52', '43', '30'
  ]

  constructor() { }

  ngOnInit() {
  }

}
