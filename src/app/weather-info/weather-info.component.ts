import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {
  currenttemp;
  constructor() {
    this.currenttemp  = {
      curtemp: 73.4,
      windDirection: 'east',
      sunrise: '5am',
      sunset: '6pm',
      humidity: '77%' ,
      weatherDescription: 'light rain',
      weatherIcon: '04n'
    };
  }

  ngOnInit() {
  }

}
