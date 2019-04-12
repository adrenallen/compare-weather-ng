import { Component, OnInit, Input } from '@angular/core';
import { RowData } from '../row-data';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-row',
  templateUrl: './weather-row.component.html',
  styleUrls: ['./weather-row.component.scss']
})
export class WeatherRowComponent implements OnInit {
  @Input('rowData') rowData: RowData;
  constructor(private weatherService: WeatherService){
  }

  ngOnInit() {
    console.log(this.rowData.address);
  }

  updateAddress(address){
    this.rowData.address = address;
    this.weatherService.getWeather(this.rowData.address)
      .subscribe((response) => {
        this.rowData.weatherData = response;
      });    
  }

}
