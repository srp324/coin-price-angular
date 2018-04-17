import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectKeys = Object.keys;
  cryptos: any;
  
  constructor(private _data: DataService) {
  }

  ngOnInit() {
    this.getPrices("BTC,ETH,IOT");
  }

  getPrices(coins) {
    this._data.getPrices(coins)
      .subscribe(res => {
        this.cryptos = res;
      });
  }
}
