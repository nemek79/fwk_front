import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cities: City[];

  selectedCity: City;

  title = 'fwkfront';
  public faCoffee = faCoffee;

  constructor(){

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

  }

}
