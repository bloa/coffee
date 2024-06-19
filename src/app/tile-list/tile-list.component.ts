import { Component } from '@angular/core';

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrl: './tile-list.component.scss'
})
export class TileListComponent {
  drinks = [
    {id: 0, name: 'Allongé', emoji: '☕💧', bg: '#ece0d1', counter: 0, price: 0.65},
    {id: 1, name: 'Café au lait', emoji: '☕🥛', bg: '#dbc1ac', counter: 0, price: 0.65},
    {id: 2, name: 'Petit café', emoji: '☕😐', bg: '#967259', counter: 0, price: 0.65},
    {id: 3, name: 'Double', emoji: '☕☕', bg: '#634832', counter: 0, price: 1.20},
    {id: 4, name: 'Chocolat', emoji: '☕🍫', bg: '#7b3700', counter: 0, price: 0.76},
    {id: 5, name: 'Thé', emoji: '🫖🍵', bg: '#b0ce84', counter: 0, price: 0.65},
  ];
  total = 0;
  sum = 0;

  constructor() { }

  public addToDrink(drink:{id:number}) {
    this.drinks[drink.id].counter += 1;
    this.total += 1;
    this.sum += this.drinks[drink.id].price;
    return false;
  }

  public removeFromDrink(drink:{id:number}) {
    if (this.drinks[drink.id].counter > 0) {
      this.drinks[drink.id].counter -= 1;
      this.total -= 1;
      this.sum -= this.drinks[drink.id].price;
    }
    return false;
  }
}
