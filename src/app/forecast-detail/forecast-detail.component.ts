import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-detail',
  templateUrl: './forecast-detail.component.html',
  styleUrls: ['./forecast-detail.component.css']
})
export class ForecastDetailComponent implements OnInit {
forecastDetails;
  constructor() {
    this.forecastDetails = {
     pressure: 2000,
     clouds: 'light rain 7',
     humidity: 88 ,
     windspeed: 2.4 ,
     winddegree: 34,
     clouddirection: 'east',
     maxtemp: 74,
     mintemp: 45
    };
    }

  ngOnInit() {
  }

}
