import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { RowData } from './row-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  rows = Array<RowData>();
  constructor(private weatherService: WeatherService){

  }

  ngOnInit(){
    // this.weatherService.getWeather("cincinnati, oh").subscribe((result) =>{
    //   console.log(result);
    // });
  }

  addRow(){
    this.rows.push(new RowData());
  }

  test(){
    console.log(this.rows);
  }
}