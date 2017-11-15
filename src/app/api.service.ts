import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  getWeatherInfo(city, callback) {
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9b8fdd801549a1d8123c9aa00e51a3d0`).subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => { console.log(err); }
    );
  }

}
