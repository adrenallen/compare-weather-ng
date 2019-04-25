import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RowData } from '../row-data';
import { WeatherService } from '../weather.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-weather-row',
  templateUrl: './weather-row.component.html',
  styleUrls: ['./weather-row.component.scss']
})
export class WeatherRowComponent implements OnInit {
  @Input('rowData') rowData: RowData;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  constructor(private weatherService: WeatherService, private snackBar: MatSnackBar){
  }

  ngOnInit() {
    if(this.rowData.address.length > 1){
      this.updateAddress(this.rowData.address);
    }
  }

  updateAddress(address){
    this.rowData.address = address.replace(/[^A-Za-z0-9,\s\-]/g, '');
    this.weatherService.getWeather(this.rowData.address)
      .subscribe((response) => {
        this.rowData.weatherData = response;
      }, (error) =>{
        this.rowData.weatherData = null;
        this.snackBar.open("Location was not found!", "Okay");
      }, () => this.onUpdate.emit(this.rowData));    
  }

  delete(){
    this.onDelete.emit(this.rowData);
  }

}
