import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private storage: StorageService) {}

  addToCart(id: number): void {
    let cart = this.storage.getCart();
    console.log(cart);
  }
}
