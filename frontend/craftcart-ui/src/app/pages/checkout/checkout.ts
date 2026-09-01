import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartItem, CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class CheckoutComponent implements OnInit {

  checkoutForm!: FormGroup;
  cartItems: CartItem[] = [];
  total = 0;

  constructor(private fb: FormBuilder, private cartService: CartService, private router: Router){}

  ngOnInit(): void {

    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
    
    this.checkoutForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      phone: ['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],

      address: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      pincode: ['',[Validators.required, Validators.pattern('^[0-9]{6}$')]],

      paymentMethod: ['online', Validators.required]
    });
  }

  placeOrder(): void{
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }

    console.log('Order details:', this.checkoutForm.value);

    this.router.navigate(['/order-confirmation']);
  }
}
