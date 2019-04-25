import {Router, ActivatedRoute, Params, UrlTree} from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { RowData } from './row-data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  rows = Array<RowData>();
  constructor(private weatherService: WeatherService, private activeRoute: ActivatedRoute, private router: Router, private location: Location){

  }

  ngOnInit (){
    this.activeRoute.queryParams.subscribe(params => {
      let locations = params['locations'];

      if(locations && locations.length > 0){
        
        //Reset in case we had empty rows... weird race condition
        this.rows = Array<RowData>();

        if(Array.isArray(locations)){
          locations.forEach(location => {
            this.addRow(location);
          });
        }else{
          this.addRow(locations);
        }
      }
      
    });

    if(this.rows.length < 1){
      this.addRow('raleigh, nc');
    }

    if(this.rows.length < 2){
      this.addRow('cincinnati, oh');
    }
  }

  hasEmpty() : boolean{
    return this.rows.some((rowData) => {
      return !rowData.weatherData;
    })
  }

  addRow(address: string = ''){
    let newRow = new RowData();
    newRow.address = address.replace(/[^A-Za-z0-9,\s]/g, '');
    this.rows.push(newRow);
  }

  updateLink(){
    let locations = [];
    this.rows.forEach((row) => {
      if(row.address.length > 0){
        locations.push(row.address);
      }      
    });

    //Some magic to make sure the page does not refresh with updated url
    let urlTree = this.router.parseUrl(this.router.url);
    urlTree.queryParams = {locations};
    window.history.pushState('', '', this.router.serializeUrl(urlTree));
  }

  delete(rowData){
    this.rows.splice(this.rows.indexOf(rowData), 1);
    this.updateLink();
  }
}