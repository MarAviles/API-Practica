import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = "https://api.openweathermap.org/data/2.5/weather?q="

  constructor(private HttpClient: HttpClient) { }

  conseguirClima(pais: string){
    return this.HttpClient.get(this.url+pais+'&appid=8fbf8594f333896c66de05f13c19da35');
  }
}
