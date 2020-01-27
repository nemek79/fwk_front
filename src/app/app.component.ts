import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

interface City {
  name: string;
  code: string;
}

interface Car {
  vin;
  year;
  brand;
  color;
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

  cols: any[];

  cars: Car[];


  constructor(){

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

    this.cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
];

    this.cars = [
      {  vin: '123', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '124', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '125', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '126', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '111', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '123', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '888', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '890', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '231', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '312', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '999', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '333', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '123', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '122', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '123', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '120903', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '12qw3', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '12ww3', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: 'qw123', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '1sd23', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '123', year: '1978', brand: 'Golf',  color: 'Plata'},
      {  vin: '2223', year: '1978', brand: 'Golf',  color: 'Plata'}
    ];

  }

}
