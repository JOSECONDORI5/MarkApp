import { Component, OnInit } from '@angular/core';
import { Product, products } from '../../data';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  products: Product[] = [];

  constructor() {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products = products;
  }

  onSearchChange(event: any): void {
    console.log(event.detail.value);
  }
}
