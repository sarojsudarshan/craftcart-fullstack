import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.loadCart();
  }

  loadCart(): void{
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  increaseQuantity(productId: number): void{
    this.cartService.increaseQuantity(productId);
    this.loadCart();
  }

  decreaseQuantity(productId: number): void{
    this.cartService.decreaseQuantity(productId);
    this.loadCart();
  }

  remove(productId: number): void{
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }
}
