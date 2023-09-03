import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { WeatherService } from '../../services/weather.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Geocoding, GeocodingResult } from '../../models/geocoding.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(
    private _weatherService: WeatherService
  ) {
    super();
  }

  place = new FormControl('');
  showList: boolean = false;
  geocoding$: BehaviorSubject<GeocodingResult[] | null>;

  ngOnInit(): void {

    this.geocoding$ = this._weatherService.geocoding$;

    this.geocoding$.subscribe((data) => console.log(data))

  }

  handleSubmit(event: Event) {
    event.preventDefault();

    if(!this.place.value) return;

    

    this._weatherService.getGeoCoding(this.place.value)
  }

  enableList() {
    console.log("Ativado")
    this.showList = true;
  }

  disableList() {
    this.showList = false;
  }

}
