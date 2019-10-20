import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pooers: string[] = [
    '09', '12', '39', '40', '65', '72',
    '26', '28', '78', '89', '98', '43',
    '61', '67', '81', '38', '68', '92',
    '23', '52', '91', '01', '88', '60',
    '71', '00', '04', '08', '18', '20',
    '24', '36', '50', '58', '59', '62',
    '64', '66', '73', '74', '84', '85',
    '95', '97', '07', '10', '11', '19',
    '22', '25', '29', '31', '34', '35',
    '46', '47', '48', '53', '55', '56',
    '76', '77', '82', '83', '93'
  ]

  constructor() { }

  ngOnInit() {
  }

}
