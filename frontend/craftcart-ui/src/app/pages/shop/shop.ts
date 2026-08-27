import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class ShopComponent {

  constructor(private cartService: CartService){}

  products: Product[] = [
    {
      id: 1,
      name: 'Crochet Sunflower Keychain',
      price: 99,
      category: 'Keychains',
      image: 'assets/images/keychain.jpg',
      description: 'Beautiful handmade crochet keychain.'
    },
    {
      id: 2,
      name: 'Crochet Daisy Keychain',
      price: 99,
      category: 'Keychains',
      image: 'assets/images/keychain.jpg',
      description: 'Beautiful handmade crochet keychain.'
    },
    {
      id: 3,
      name: 'Crochet Chafa Keychain',
      price: 99,
      category: 'Keychains',
      image: 'assets/images/keychain.jpg',
      description: 'Beautiful handmade crochet keychain.'
    },
    {
      id: 4,
      name: 'Crochet Heart Keychain',
      price: 99,
      category: 'Keychains',
      image: 'assets/images/keychain.jpg',
      description: 'Beautiful handmade crochet keychain.'
    },
    {
      id: 5,
      name: 'Crochet Bow Keychain',
      price: 99,
      category: 'Keychains',
      image: 'assets/images/keychain.jpg',
      description: 'Beautiful handmade crochet keychain.'
    }
  ];

  addToCart(product: Product): void{
    this.cartService.addToCart(product);
  }

  increaseQuantity(productId: number): void{
    this.cartService.increaseQuantity(productId);
  }

  decreaseQuantity(productId: number): void{
    this.cartService.decreaseQuantity(productId);
  }

  getQuantity(productId: number): number{
    return this.cartService.getQuantity(productId);
  }
}