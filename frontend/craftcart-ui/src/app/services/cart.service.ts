import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { isNgTemplate } from '@angular/compiler';

export interface CartItem{
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cartItems: CartItem[] = [];

  getCartItems(): CartItem[]{
    return this.cartItems;
  }

  addToCart(product: Product): void{

    const existingItem = this.cartItems.find(
      item => item.product.id === product.id
    );

    if(existingItem){
      existingItem.quantity++;
    }else{
      this.cartItems.push({
        product: product,
        quantity: 1
      });
    }
  }

  increaseQuantity(productId: number): void{
    const item = this.cartItems.find(
      item => item.product.id === productId
    );

    if(item){
      item.quantity++;
    }
  }

  decreaseQuantity(productId: number): void {
    const item = this.cartItems.find(
      item => item.product.id === productId
    );

    if(item){
      item.quantity--;

      if(item.quantity === 0){
        this.removeFromCart(item.product.id);
      }
    }
  }

  getQuantity(productId: number): number{
    const item = this.cartItems.find(
      item => item.product.id === productId
    );

    return item ? item.quantity : 0;
  }

  removeFromCart(productId: number): void{
    this.cartItems = this.cartItems.filter(
      item => item.product.id !== productId
    );
  }

  getTotal(): number {

    return this.cartItems.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    );
  }
}
