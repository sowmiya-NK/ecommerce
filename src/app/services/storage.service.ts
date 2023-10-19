import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/product';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  users: User[] = [
    { id: 1, email: 'sowmiya123@gmail.com', password: 'sowmiya123' },
  ];

  constructor() {}

  loaduser() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  loadproducts(products: Product[]) {
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }

  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }

  setAllUsers(registerForm: User) {
    this.users.push({
      id: this.users.length + 1,
      email: registerForm.email,
      password: registerForm.password,
    });
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  //userset
  setLoggesInUser(user: User): void {
    localStorage.setItem('LoggedInUser', JSON.stringify(user));
  }

  //remove user when logout is clicked
  removeLoggedInUser(): void {
    localStorage.removeItem('LoggedInUser');
  }

  isLoggedInUser(): boolean {
    return localStorage.getItem('LoggedInUser') !== null;
  }

  //product getting from localstoarge
  getProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') as string);
  }
}
