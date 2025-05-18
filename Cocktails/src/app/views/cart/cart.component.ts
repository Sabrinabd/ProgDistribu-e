import { Component, computed, inject } from '@angular/core';
import { CartCocktailsListComponent } from './components/cart-cocktails-list.component';
import { CartService } from 'app/partage/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { StripeService } from 'app/partage/services/stripe.service';

@Component({
  selector: 'app-cart',
  imports: [CartCocktailsListComponent],
  template: `
    <app-cart-cocktails-list class="card" [cocktails]="cocktails()" />
    <div class="checkout-section">
      <button class="checkout-button" (click)="checkout()">Proceed to Checkout</button>
    </div>
  `,
  styles: `
    :host { 
      flex: 1 1 auto;
    }
    .checkout-section {
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
    .checkout-button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }
    .checkout-button:hover {
      background-color: #0056b3;
    }
  `,
})
export class CartComponent {
  private cartService = inject(CartService);
  cocktails = computed(() => this.cartService.cocktails());
  private stripeService = inject(StripeService);
  private http = inject(HttpClient);
  checkout() {
    this.stripeService
      .createCheckoutSession(this.cartService.cocktails())
      .subscribe((response) => {
        window.location.href = response.url;
      });
  }
  constructor() {
  
  }
}
