import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: any[] = [
    {
      id: 1,
      name: 'NSGM_Robus400',
      price: 20.99,
      imageUrl: '../../assets/images/NSGM_Robus400.png',
    },
    {
      id: 2,
      name: 'NSGM_Robus600',
      price: 15.49,
      imageUrl: '../../assets/images/NSGM_Robus600.png',
    },
    {
      id: 3,
      name: 'NSGM_Robus1000',
      price: 25.0,
      imageUrl: './../assets/images/NSGM_Robus1000.png',
    },
    {
      id: 4,
      name: 'NSGM_Robus400',
      price: 20.99,
      imageUrl: '../../assets/images/NSGM_Robus400.png',
    },
    {
      id: 5,
      name: 'NSGM_Robus600',
      price: 15.49,
      imageUrl: '../../assets/images/NSGM_Robus600.png',
    },
    {
      id: 6,
      name: 'NSGM_Robus1000',
      price: 25.0,
      imageUrl: './../assets/images/NSGM_Robus1000.png',
    },
    // Add more products as needed
  ];
  isGridView = true;

  toggleView(view: 'grid' | 'column'): void {
    this.isGridView = view === 'grid';
  }
  enquire(product: any): void {
    // Add your logic for handling the "Enquire" button click, e.g., open a modal, send an inquiry, etc.
    console.log(`Enquiring about ${product.name}`);
  }
}
