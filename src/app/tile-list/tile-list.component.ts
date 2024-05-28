import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrl: './tile-list.component.scss'
})
export class TileListComponent implements OnInit {
  drinks:any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.drinks = this.dataService.getDrinks();    
  }

  public addToDrink(drink:any) {
    this.dataService.addToDrink(drink.id);
    return false;
  }

  public removeFromDrink(drink:any) {
    this.dataService.removeFromDrink(drink.id);
    return false;
  }
}
