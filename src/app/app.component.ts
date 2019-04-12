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
    this.addRow();
  }

  hasEmpty() : boolean{
    return this.rows.some((rowData) => {
      return !rowData.weatherData;
    })
  }

  addRow(){
    this.rows.push(new RowData());
  }

  test(){
    console.log(this.rows);
  }

  delete(rowData){
    this.rows.splice(this.rows.indexOf(rowData), 1);
  }
}