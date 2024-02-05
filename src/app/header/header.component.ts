import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartItems: any[] = [
    { id: 1, name: 'Product 1', price: 20.99 },
    // Add more items as needed
  ];

  isCartDropdownOpen = false;

  getTotalItems(): number {
    return this.cartItems.length;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  checkout(): void {
    // Add your logic for the checkout functionality
    console.log('Checking out');
    this.closeCartDropdown();
  }

  viewCart(): void {
    // Add your logic for the view cart functionality
    console.log('Viewing cart');
    this.closeCartDropdown();
  }

  toggleCartDropdown(): void {
    this.isCartDropdownOpen = !this.isCartDropdownOpen;
  }

  closeCartDropdown(): void {
    this.isCartDropdownOpen = false;
  }
}
