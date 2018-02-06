import { Component, OnInit } from '@angular/core';
import { Prices } from '../shared/prices'

const PRICES: Prices[] = [
                         {
                           name:'Chicken',
                           image: '/assets/images/chicken.gif',
                           label:'Hot',
                           price:'3.25'
                         }, {
                           name:'Turkey',
                           image: '/assets/images/turkey.gif',
                           label:'',
                           price:'10.99'
                         }, {
                           name:'Duck',
                           image: '/assets/images/duck.gif',
                           label:'New',
                           price:'1.99'
                         }, {
                           name:'Goose',
                           image: '/assets/images/goose.gif',
                           label:'',
                           price:'2.99'
                         }
                        ];

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  prices = PRICES;

  selectedPrice: Prices = PRICES[0];

  constructor() { }

  ngOnInit() {
  }

}
