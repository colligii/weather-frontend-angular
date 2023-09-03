import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject, catchError, of } from 'rxjs';
import { Geocoding, GeocodingResult } from '../models/geocoding.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  private ob_geocoding$ = new BehaviorSubject<GeocodingResult[] | null>(null);

  get geocoding$() {
    return this.ob_geocoding$;
  }

  getGeoCoding(name: string) {

    this._httpClient.get(environment.weather_api_address+"search", {
      params: {
        name,
        count: "10",
        language: "en",
        format: "json"
      }
    })
      .pipe(
        catchError(err => ({ isError: true, ...err }))
      )
      .subscribe((value: any) => this.ob_geocoding$.next(value.results as GeocodingResult[]))
    
  }

}
