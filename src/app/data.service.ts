import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  drinks = [
    {id: 0, name: 'Allongé', emoji: '☕💧', bg: '#ece0d1', counter: 0},
    {id: 1, name: 'Café au lait', emoji: '☕🥛', bg: '#dbc1ac', counter: 0},
    {id: 2, name: 'Petit café', emoji: '☕😐', bg: '#967259', counter: 0},
    {id: 3, name: 'Double', emoji: '☕☕', bg: '#634832', counter: 0},
    {id: 4, name: 'Chocolat', emoji: '☕🍫', bg: '#7b3700', counter: 0},
    {id: 5, name: 'Thé', emoji: '🫖🍵', bg: '#b0ce84', counter: 0},
  ]

  constructor() { }

  public getDrinks():Array<{id:number, name:string, emoji:string, counter:number}> {
    return this.drinks;
  }

  public addToDrink(id:number) {
    this.drinks[id].counter += 1;
  }

  public removeFromDrink(id:number) {
    if (this.drinks[id].counter > 0) {
      this.drinks[id].counter -= 1;
    }
  }
}
