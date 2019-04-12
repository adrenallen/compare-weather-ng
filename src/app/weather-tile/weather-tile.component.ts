import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.scss']
})
export class WeatherTileComponent implements OnInit {

  @Input('tileData') tileData: any;
  public date: Date;
  public low;
  public high;
  public rainChance;
  public windSpeed;
  public humidity;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    
    iconRegistry.addSvgIcon(
      'clear-day',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/Sun.svg')
    );

    iconRegistry.addSvgIcon(
      'clear-night',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/Moon-Waning-Crescent.svg')
    );
    iconRegistry.addSvgIcon(
      'rain',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/Cloud-Rain.svg')
    );
    iconRegistry.addSvgIcon(
      'snow',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/Cloud-Snow.svg')
    );
    iconRegistry.addSvgIcon(
      'sleet',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/Cloud-Hail.svg')
    );
    iconRegistry.addSvgIcon(
      'wind',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/Wind.svg')
    );
    iconRegistry.addSvgIcon(
      'fog',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/Cloud-Fog.svg')
    );
    iconRegistry.addSvgIcon(
      'cloudy',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/Cloud.svg')
    );
    iconRegistry.addSvgIcon(
      'partly-cloudy-day',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/Cloud-Sun.svg')
    );
    iconRegistry.addSvgIcon(
      'partly-cloudy-night',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/Sun.svg')
    );


   }

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
