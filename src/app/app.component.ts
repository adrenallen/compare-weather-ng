import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'compare-weather-ng';
  constructor(private weatherService: WeatherService){

  }

  ngOnInit(){
    this.weatherService.getWeather("cincinnati, oh").subscribe((result) =>{
      console.log(result);
    });
  }
}
