import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private ENDPOINT = 'https://jnqbahln91.execute-api.us-east-2.amazonaws.com/default/getWeather';

  constructor(private http: HttpClient) { }

  public getWeather(address: string):Observable<Object>{
    return this.http.post(this.ENDPOINT, {addressQuery: address});
  }
}
