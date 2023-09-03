import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  private ob_geocoding$ = new Subject();

  get geocoding$() {
    return this.ob_geocoding$;
  }

  getGeoCoding() {

  }

}
