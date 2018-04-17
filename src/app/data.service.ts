// We will be making the API calls here

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: HttpClient) { }

  getPrices(cryptos) {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + cryptos + '&tsyms=USD')
      .map(result => this.result = result);
  }

}
