import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {PredictionService} from "../services/prediction.service";

interface City {
  name: string;
}

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  predictionList: any[] = [];
  weatherToday: any[] = [];
  weatherNextTwoDays: any[] = [];
  selectedValue: string;
  selectedCar: string;
  cities: City[] =  [{name: 'London'}, {name: 'Reykjavik'}, {name: 'Kolkata'}, {name: 'Sydney'},{name:'Jeddah'},{name:'Kingsburg'},{name:'Kobe'},{name:'Rome'}];
  selectedCity: string = this.cities[0].name;


  constructor(private predictionService: PredictionService) {
  }

  ngOnInit() {
    this.displayWeather(this.cities[0].name);
  }

  onCityChange(newCity: any) {
    this.displayWeather(newCity);
  }

  displayWeather(city: string) {
    this.predictionService.getPrediction(city).subscribe(data => {
      console.log(data);
      this.weatherToday = [];
      this.weatherNextTwoDays=[];
      this.predictionList = data.list;
      let today = this.predictionList[0].dt_txt.split(" ")[0];
      for (let i = 0; i < this.predictionList.length; i++) {
        this.predictionList[i].weather[0].icon = "https://openweathermap.org/img/wn/" + this.predictionList[i].weather[0].icon + ".png";
        if (this.predictionList[i].dt_txt.split(" ")[0] == today) {
          this.weatherToday.push(this.predictionList[i]);
        } else {
          this.weatherNextTwoDays.push(this.predictionList[i]);
        }
      }
      ;
      this.weatherNextTwoDays = this.weatherNextTwoDays.slice(0, 16);
    });

  }
}
