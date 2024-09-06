import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weatherData: any;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'];
      this.getWeather();
    });
  }

  getWeather() {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe(
        data => this.weatherData = data,
   
        
        error => console.error('Error fetching weather data', error)
      );
    }
  }
}
