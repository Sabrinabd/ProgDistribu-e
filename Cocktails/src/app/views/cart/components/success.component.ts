import { Component, inject } from '@angular/core';
import { CartService } from 'app/partage/services/cart.service';

@Component({
  selector: 'app-success',
  template: `
    <div class="success-message">
      <h1>Paiement réussi !</h1>
      <p>Merci pour votre achat. Votre panier a été vidé.</p>
      <a routerLink="/cart" class="btn">Retour au panier</a>
    </div>
  `,
  styles: [
    `
      .success-message {
        text-align: center;
        margin-top: 50px;
      }
      .btn {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #28a745;
        color: white;
        text-decoration: none;
        border-radius: 5px;
      }
      .btn:hover {
        background-color: #218838;
      }
    `,
  ],
})
export class SuccessComponent {
  private cartService = inject(CartService);

  constructor() {
    // vider le panier apres le chargement de la page et rediriger vers le panier
    this.cartService.clearCart();
    console.log('Panier vidé avec succès !');
    setTimeout(() => {
      window.location.href = '/cart';
    }
    , 500); // redirection après 500ms
  }
}