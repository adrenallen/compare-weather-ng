import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.css']
})
export class WeatherTileComponent implements OnInit {

  @Input('tileData') tileData: any;
  public date: Date;
  public low;
  public high;
  public rainChance;
  public windSpeed;
  public humidity;
  constructor() { }

  ngOnInit() {
    console.log(this.tileData);
    this.date = new Date(this.tileData.time * 1000);
    this.low = Math.round(this.tileData.temperatureMin);
    this.high = Math.round(this.tileData.temperatureMax);
    this.rainChance = Math.round(this.tileData.precipProbability*100);
    this.windSpeed = Math.round(this.tileData.windSpeed);
    this.humidity = Math.round(this.tileData.humidity * 100);
  }

}
