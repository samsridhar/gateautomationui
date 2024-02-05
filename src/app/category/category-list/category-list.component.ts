import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  categories: string[] = [
    'SLIDING GATE MOTOR',
    'SWING GATE MOTOR',
    'GARAGE GATE MOTOR',
    'PARKING GATE BARRIER',
  ];
}
