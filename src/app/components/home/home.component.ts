import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  products: Product[] = [];
  email: string = '';
  constructor(
    private productservice: ProductService,
    private cartservice: CartService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.storage.loadproducts(this.products);
      },
      complete: () => {
        console.log('completed');
      },
      error: (error: Error) => {
        console.log('Message', error.message);
        console.log('Name', error.name);
      },
    });
  }

  addToCart(id: number) {
    this.cartservice.addToCart(id);
  }
}
