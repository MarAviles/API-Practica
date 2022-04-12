import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  buscador = this.FormBuilder.group({
    country: 'London'
  })

  pais: string = '';
  temperatura: string = '';
  description: string = '';

  constructor(private FormBuilder: FormBuilder, private WeatherService: WeatherService) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar(){

    let country: string = this.buscador.get('country')?.value;

    this.WeatherService.conseguirClima(country).subscribe((res:any)=>{
      console.log(res.main.temp);
      console.log(res.weather[0].description);
      this.pais = res.name;
      this.description = res.weather[0].description;
      this.temperatura = res.main.temp;
    
    })
  }


}
